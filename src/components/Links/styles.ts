import styled from "styled-components"

export const Container = styled.div`
    display: flex;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        margin-left: 10px;
        padding: 3px;
        background-image: linear-gradient(to bottom, #85bbe0, #4bb7ff);
        border-radius: 6px;
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    }

    @media (max-width: 484px) {
        .icon {
            width: 35px;
            height: 35px;
            margin-left: 5px;
            padding: 3px;
        }
    }
`;