import React, {useState} from 'react';

const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("button clicked");
    };

    const onChange = (e) => {

    };

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    return (
        <div className={"register"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className="col-mid-8 m-auto">
                        <h1 className="display-4 text-center">Login</h1>
                        <p className={"lead text-center"}>
                            Login to your DevConnector account
                        </p>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type={"email"}
                                    className={"form-control form-control-lg"}
                                    placeholder="Email"
                                    name={"Email"}
                                    value={"Email"}
                                    onchange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type={"password"}
                                    className={"form-control form-control-lg"}
                                    placeholder="Password"
                                    name={"password"}
                                    value={"password"}
                                    onchange={onChange}
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-info btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;