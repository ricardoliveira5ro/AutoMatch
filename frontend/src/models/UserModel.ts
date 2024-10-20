class UserModel {
    id: number;
    firstName: string;
    lastName: string;
    contactEmail: string;
    contactPhone: string;
    location: string;

    constructor(id: number, firstName: string, lastName: string, contactEmail: string, contactPhone: string, location: string) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.contactEmail = contactEmail,
        this.contactPhone = contactPhone,
        this.location = location;
    }
}

export default UserModel;