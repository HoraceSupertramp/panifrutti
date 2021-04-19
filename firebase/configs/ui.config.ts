import firebase from "firebase";

export const uiConfig = {
    //
    //credentialHelper?: CredentialHelperType;
    // popupMode: true,
    //queryParameterForSignInSuccessUrl?: string;
    // queryParameterForWidgetMode?: string;
    //signInFlow?: string;
    signInSuccessUrl : "",
    // siteName?: string;
    //tosUrl?: (() => void) | string;
    //privacyPolicyUrl?: (() => void) | string;
    //widgetUrl?: string;
    signInOptions: [
        {
            provider : firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        },
        {
            provider : firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        }
    ],
    callbacks: {

    }
}

