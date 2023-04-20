import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: var(--bg-form-gradient);
    min-height: 692px;
    overflow: hidden;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    /* Media queries */
    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const FormIcon = styled(Link)`
    color: var(--clr-white);
    text-decoration: none;
    font-size: 32px;
    font-weight: 700;
    margin-left: 32px;
    margin-top: 32px;

    /* Media queries */
    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    /* Media queries */
    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    display: grid;
    width: 100%;
    height: auto;
    max-width: 400px;
    background: var(--bg-form);
    z-index: 1;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const FormHeading = styled.h1`
    color: var(--clr-white);
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 40px;
    text-align: center;
`;

export const FormLabel = styled.label`
    color: var(--clr-white);
    font-size: 14px;
    margin-bottom: 8px;
`;

export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: var(--clr-green);
    color: var(--clr-white);
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    color: var(--clr-white);
    font-size: 14px;
    margin-top: 24px;
    text-align: center;

    &:hover {
        color: var(--clr-green);
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
`;