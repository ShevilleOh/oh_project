import React, {useState} from 'react';

const Register = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const onChange = (e) => {

    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("button clicked");
    };

    return (
        <div className={"register"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className="col-mid-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className={"lead text-center"}>
                            Create your DevConnector account
                        </p>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type={"text"}
                                    className={"form-control form-control-lg"}
                                    placeholder="User Name"
                                    name={"name"}
                                    value={"name"}
                                    onchange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type={"email"}
                                    className={"form-control form-control-lg"}
                                    placeholder="Email"
                                    name={"Email"}
                                    value={"Email"}
                                    onchange={onChange}
                                />
                                <small className="form-text text-muted">
                                    This site uses Gravatar so if you want a profile image,
                                    use a Gravatar email
                                </small>
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
                            <div className="form-group">
                                <input
                                    type={"password"}
                                    className={"form-control form-control-lg"}
                                    placeholder="Confirm Password"
                                    name={"password2"}
                                    value={"password2"}
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

export default Register;