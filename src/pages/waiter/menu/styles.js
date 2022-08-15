import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    background-color: var(--black);
    justify-content: space-between;
    padding: 1rem 2rem;
    color: white;
    
    h1 {
        font-size: 2rem;
    }

    div {
        display: flex;
        align-items: center;

        svg {
            font-size: 2rem;
            :last-child {
                margin-left: 1rem;
            }
        }
    }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #8D8D92;
    width: 100%;
    min-height: 87vh;
    padding: 0 2rem;


    @media screen and (max-width: 640px){
        padding: 0 0.5rem;
    }
`;


export const Categories = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    margin: 1rem 0;


    li {
        list-style-type: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        :hover{
        }
    }
`;

export const AllProducts = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Product = styled.div`
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    background-color: var(--gray);
    border-radius: 8px;
    color: white;

    button {
        background-color: var(--green);
        color: white;
        padding: 0 1rem;
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 1.25px;

    }
`;

export const Infos = styled.section`
    display: flex;
    
    img {
        width: 5rem;
        border-radius: 8px 0 0 8px;
    }
    div {
        display: flex;
        flex-direction: column;
        padding:0.5rem 1rem;

        h2 {
            font-size: 1.25rem;
        }
        h3 {
            font-size: 0.75rem;
            color: var(--more-gray);
            margin: 2px 0 8px;
        }
        h4 {
            font-size: 1rem;
        }
    }

`;
