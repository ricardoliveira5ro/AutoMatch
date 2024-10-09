export const Login = () => {
    
    return (
        <div className="container">
            <div className="d-flex flex-column">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    );
}