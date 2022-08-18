import styled from "styled-components";

export const TableContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        font-weight: 700;
        font-size: 1.5rem;
        text-align: center;
        color: white;
        background-color: var(--green);
        width: 4rem;
        max-width: 4rem;
        min-width: 4rem;
        padding: 1rem 1rem;
        border-radius: 4px;
        :hover {
            cursor: pointer;
        }
    }
    div.is_busy {
        background-color: var(--red);
    }
`;