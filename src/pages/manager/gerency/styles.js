import styled from "styled-components";

export const Logo = styled.img`
    width: 6rem;
    height: 6rem;
    margin-top: -10rem;
`;

export const ContainerLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 3rem;


    a {
        color: white;
        text-decoration: none;
        padding: 1rem; 
        background-color: var(--primary);
        border-radius: 5px;
    }
`;