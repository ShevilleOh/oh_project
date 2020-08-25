import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from "../common/TextFieldGroup";



const CreateProfile = props => {

    const [profileData, setProfileData] = useState({
        displaySocialInputs: false,
        introduce: null,
        skills: null,
        website: null,
        location: null,
        githubusername: null,
        bio: null,
        twitter: null,
        facebook: null,
        linkedin: null,
        youtube: null,
        instagram: null,
    });

    const handleChange = text => e => {
        setProfileData({ ...profileData, [text]: e.target.value });
    }

    const handleSubmit = () =>{

    }



    const {
        displaySocialInputs,
        introduce,
        skills,
        website,
        location,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = profileData;



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

                        <form onSubmit={handleSubmit}>
                            <TextFieldGroup
                                placeholder="* Basic Info"
                                name="introduce"
                                value={introduce}
                                onChange={handleChange('introduce')}
                            />

                            <TextFieldGroup
                                placeholder="* Skills"
                                name="Skills"
                                value={skills}
                                onChange={handleChange('skills')}
                            />

                            <TextFieldGroup
                                placeholder="Website"
                                name="website"
                                value={skills}
                                onChange={handleChange('website')}
                            />

                            <TextFieldGroup
                                placeholder="Location"
                                name="location"
                                value={location}
                                onChange={handleChange('location')}
                            />

                            <TextFieldGroup
                                placeholder="githubusername"
                                name="githubusername"
                                value={githubusername}
                                onChange={handleChange('githubusername')}
                            />
                            <TextFieldGroup
                                placeholder="Bio"
                                name="bio"
                                value={bio}
                                onChange={handleChange('bio')}
                            />

                            <div className={"mb-3"}>
                                <button
                                    type="button"
                                    className={"btn btn-light"}
                                    onClick={() => alert('test')}
                                >
                                    Add Social Network Links
                                </button>
                                <span className="text-muted"> Optional</span>
                            </div>
                            <input
                                type={"submit"}
                                value-="Submit"
                                className={"btn btn-info btn-bloack mt-4"}
                            />
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