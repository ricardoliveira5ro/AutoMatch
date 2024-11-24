import React, { useEffect, useState } from 'react';
import './ProfileForm.css'
import { useAuth } from '../../../../authentication/AuthProvider';

export const ProfileForm: React.FC<{
    onSaveSuccess: () => void
}> = (props) => {

    const { logout } = useAuth();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        fetch(`/api/users/profile`, {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("user_access_token")}`
            }
        })
        .then(async response => {
            const result = await response.json();
            
            if (response.ok) {
                setEmail(result.contactEmail);
                setFirstName(result.firstName);
                setLastName(result.lastName);
                setPhone(result.contactPhone);
                setLocation(result.location || "");
                return;
            }

            const error = result || "Unknown error"
            
            return Promise.reject(error)
        })
        .catch(error => {
            console.log(error.message);
        });
    }, []);

    const saveUserInfo = () => {
        fetch(`/api/users/info`, {
            method: "PUT",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("user_access_token")}`
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                location: location,
                contactPhone: phone
            })
        })
        .then(async response => {

            if (response.ok) {
                props.onSaveSuccess();
                return;
            }

            // Unauthorized access (Expired / Invalid token)
            if (response.status === 401) {
                logout(true);
                return;
            }

            const data = await response.json();
            const error = data || "Unknown error"
            
            return Promise.reject(error)
        })
        .catch(error => {
            alert(error.message)
        });
    }

    return (
        <div className='row py-5 profile-form-container'>
            <div className='col-3 d-none d-sm-flex justify-content-center align-items-center'>
                <i className="bi bi-person-circle" style={{ color: 'white' }}></i>
            </div>
            <div className='col col-sm-8'>
                <div className='d-flex flex-column w-100' style={{ rowGap: '20px' }}>
                    <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)} className='me-2 me-lg-5' type="text" placeholder="First Name" aria-label="First Name" aria-describedby="profile-first-name" />
                        <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" aria-label="Last Name" aria-describedby="profile-last-name" />
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                        <input value={location} onChange={e => setLocation(e.target.value)} className='me-2 me-lg-5' type="text" placeholder="Location, Country or City" aria-label="Location, Country or City" aria-describedby="profile-location" />
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="number" placeholder="Phone number" aria-label="Phone number" aria-describedby="profile-phone-number" />
                    </div>
                    <div className='email-save-container d-flex flex-row justify-content-between align-items-center'>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" aria-label="Email" aria-describedby="profile-email" disabled />
                        <button className='btn btn-primary px-4 save-profile-btn' onClick={saveUserInfo}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}