import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dashboard = props => {
    return (
        <div className="dashboard">
            <div className="container">
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <h1 className={"display-4"}>Dashboard</h1>
                            <div>
                                <p className={"lead text-muted"}> Welcome </p>
                                <p>You have not yet setup a profile, please add info</p>
                                <Link to={"/create-profile"} className="btn btn-lg btn-info">
                                    Start your Profile
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    
};

export default Dashboard;