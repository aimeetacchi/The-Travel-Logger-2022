import React from 'react'
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';

// import styled from 'styled-components';

const SignInForm = (props) => {

    const { authState } = props;
    console.log('AuthState SigninForm Page', authState);

    return (
        <AmplifyAuthenticator usernameAlias="email">
            <AmplifySignUp
                slot="sign-up"
                usernameAlias="email"
                formFields={[
                    {
                        type: "email",
                        // label: "Custom Email Label",
                        placeholder: "Email Address",
                        inputProps: { required: true, autocomplete: "username" },
                    },
                    {
                        type: "password",
                        // label: "Custom Password Label",
                        placeholder: "Temp Password",
                        inputProps: { required: true, autocomplete: "new-password" },
                    },
                    // {
                    //     type: "phone_number",
                    //     // label: "Custom Phone Label",
                    //     placeholder: "Custom phone placeholder",
                    // },
                ]}
            />
            <AmplifySignIn
                slot="sign-in"
                usernameAlias="email"
            />
        </AmplifyAuthenticator>
    )
}

export default SignInForm
