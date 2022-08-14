import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        font-size: 0.9rem;
        color: var(--primary);
        margin-bottom: 2px;
    }

    input {
        display: flex;
        font-size: 1rem;
        margin-bottom: 0.75rem;
        padding: 0.75rem 1rem;
        border: none;
        outline: none;
        border-radius: 4px;
        max-width: 600px;
        min-width: 60vw;
        -webkit-box-shadow: 2px 3px 19px -7px rgba(0,0,0,1);
        -moz-box-shadow: 2px 3px 19px -7px rgba(0,0,0,1);
        box-shadow: 2px 3px 19px -7px rgba(0,0,0,1);

    }

    select {
        font-size: 1rem;
        margin-bottom: 0.75rem;
        padding: 0.75rem 1rem;
        outline: none;
    }

    button {
        background-color: var(--primary);
        padding: 1rem 2rem;
        border-radius: 8px;
        border: none;
        color: white;
        font-weight: 600;
        font-size: 1.25rem;
        margin-top: 0.5rem;
    }

    span {
        font-size: 1.2rem;
        color: white;
        text-align: right;
        margin-top: 0.5rem;
        a {
            color: var(--primary);
            font-weight: 600    ;
        }
    }

    a {
        color: var(--primary);
        margin-top: 10px;
    }
`;

export default Form;