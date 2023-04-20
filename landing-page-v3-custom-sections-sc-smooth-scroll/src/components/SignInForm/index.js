import React from 'react';
import {
    Container, FormWrapper, FormIcon,
    FormContent, Form, FormHeading,
    FormLabel, FormInput, FormButton,
    Text
} from './SignInFormStyles';

const SignInForm = () => {
    return (
        <>
            <Container>
                <FormWrapper>
                    <FormIcon to="/">dolla</FormIcon>
                    <FormContent>
                        <Form action="#">
                            <FormHeading>Sign into your account</FormHeading>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrapper>
            </Container>
        </>
    )
}

export default SignInForm