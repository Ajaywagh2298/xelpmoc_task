import "./CSS/user-register.css";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const UserRegister = () => {
    const navigate = useNavigate();
 let mes;
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const obj = {
            full_name: data.full_name,
            user_name: data.user_name,
            password: data.password,
            email: data.email,
            mobile_number: data.mobile_number,
        };

        axios
            .post(`http://localhost:9000/users`, obj)
            .then((res) => {
                console.log(res.data.message);
               mes = res.data.message
                setTimeout(() => {
                    navigate("/");
                }, 2000);

            })
            .catch((err) => {
                console.log(err);
                navigate("/register");
            });
    };

    return (
        <div className={"b-vox"}>
            <div className={"space"}/>
            <div className={"container-box"}>
                <div className="register-box">
                    <h1>Sign Up</h1>
                    <div className={"divider2"}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            name="full_name"
                            ref={register}
                            id="name"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            type="text"
                            name="user_name"
                            ref={register}
                            id="first"
                            placeholder="User Name"
                        />
                        <input
                            type="password"
                            ref={register}
                            name="password"
                            placeholder="Password.."
                            maxLength="10"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            ref={register}
                        />
                        <input
                            type="text"
                            name="mobile_number"
                            id="mobile_number"
                            placeholder="Mobile Number"
                            ref={register}
                        />
                        <input type="submit" value="Register"/>
                        <input type="reset" value="Cancel"/>
                    </form>
                    <div className={"divider2"}/>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
