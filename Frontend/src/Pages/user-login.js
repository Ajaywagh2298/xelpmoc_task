import "./CSS/user-login.css";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";

const UserLogin = () => {
    const navigate = useNavigate();
    let mes;
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        const obj = {
            user_name: data.user_name,
            password: data.password,
        };
        axios
            .post("http://localhost:9000/login-user", obj, {withCredentials: true})
            .then((res) => {
                mes = res.data.message
                setTimeout(() => {
                    navigate("/calculator");
                }, 2000);
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={"b-vox"}>
            <div className={"space"}/>
            <div className={"container-box"}>
                <div className="reg-box">
                    <h1>Login</h1>
                    <div className={"divider"}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            id="username"
                            name={"user_name"}
                            placeholder="User Name"
                            ref={register}
                        />
                        <input
                            type="password"
                            name={"password"}
                            id="password"
                            placeholder="Password.."
                            maxLength="10"
                            ref={register}
                        />
                        <input type="submit" value="Login"/>
                        <input type="reset" value="Cancel"/>
                    </form>
                    <div className={"divider"}/>
                    <p className={"t"}>
                        New User Click Here :&nbsp;&nbsp;&nbsp;
                        <Link className={"link"} to={"/register"}>
                            register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
