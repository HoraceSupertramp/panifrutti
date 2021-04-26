import React, {useState} from 'react';
import {authFB} from "../../../firebase/configs/firebase.config";
const UserProfile : React.FC = () => {
    let user = (authFB.currentUser) ? authFB.currentUser : null;
    return (
        <div className="UserProfile">
            <div className="UserProfileWrapper">
                <div className="CredentialsWrapper">

                    <form className="UserInfoContainers">
                        <div className="InfoModifySettingOnce">
                            <label htmlFor="user-profile-input-id">ID: {user?.uid}</label>
                            <input type="text" className="" id="user-profile-input-id"/>
                            <button>MODIFY</button>
                        </div>
                        <div className="InfoModifySettingOnce">
                            <label htmlFor="user-profile-input-name">NAME: {user?.displayName}</label>
                            <input type="text" className="" id="user-profile-input-name"/>
                            <button>MODIFY</button>
                        </div>
                        <div className="InfoModifySettingOnce">
                            <label htmlFor="user-profile-input-email">ID: {user?.email}</label>
                            <input type="text" className="" id="user-profile-input-email"/>
                            <button>MODIFY</button>
                        </div>
                        <h3>Created: {user?.metadata.creationTime}</h3>
                        <h3>Last Sig: {user?.metadata.lastSignInTime}</h3>
                        <h3>Photo: {user?.photoURL}</h3>
                        <h3>Provider: {user?.providerId}</h3>
                        <h3>Ruolo: {}</h3>


                        <div className="UserInfoContainers">
                            <div className="InfoModifySettingOnce">
                                <label htmlFor="user-profile-input-lastName">Last name</label>
                                <input type="text" className="" id="user-profile-input-lastName"/>
                                <button>MODIFY</button>
                            </div>
                            <div className="InfoModifySettingOnce">
                                <label htmlFor="user-profile-input-address">Address</label>
                                <input type="text" className="" id="user-profile-input-address"/>
                                <button>MODIFY</button>
                            </div>

                            <div className="UserOrderList">
                                <h2>Recent Orders</h2>
                                <h3>Fidelity Card: {}</h3>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;