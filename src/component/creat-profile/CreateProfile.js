import React from 'react';
import PropTypes from 'prop-types';

const CreateProfile = props => {
    return (
        <div className={"create-profile"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-8 m-auto"}>
                        <h1 className={"display-4 text-center"}> Create your Profile</h1>
                        <p className={"lead text-center"}>
                            Let's get some information to flex
                        </p>
                        <small className={"d-block pd-3"}> * = required fields </small>

                        <form>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

CreateProfile.propTypes = {

};

export default CreateProfile;