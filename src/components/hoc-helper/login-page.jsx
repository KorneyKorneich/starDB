import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {singIn} = useAuth();

    const fromPage = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.userName.value;

        singIn(user, ()=> navigate(fromPage, {replace: true}));
    }

    return(
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="userName" />
                </label>
                <button type="submit">Log in</button>
            </form>
            <p>You came from {fromPage}</p>
        </div>
    )
};

export {LoginPage};