import React, {useState} from 'react';
import {authFB} from "../../../firebase/configs/firebase.config";
const UserProfile : React.FC = () => {
    let user = (authFB.currentUser) ? authFB.currentUser : null;
    return (
        <div className="UserProfile">
            <div className="UserProfileWrapper">
                <div className="CredentialsWrapper">
                    <div className="UserInfoContainers">
                        <h2>ID: {user?.uid}</h2>
                        <h3>Nome: {user?.displayName}</h3>
                        <h3>Email: {user?.email}</h3>
                        <h3>Created: {user?.metadata.creationTime}</h3>
                        <h3>Last Sig: {user?.metadata.lastSignInTime}</h3>
                        <h3>Photo: {user?.photoURL}</h3>
                        <h3>Provider: {user?.providerId}</h3>
                        <h3>Ruolo: {}</h3>
                    </div>
                    <div className="UserInfoContainers">
                        <h3>Last Name: {}</h3>
                        <h3>Address: {}</h3>
                        <h3>Fidelity Card: {}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;