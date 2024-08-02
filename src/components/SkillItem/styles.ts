import styled from "styled-components"

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 65px;
        height: 65px;
        margin: 0 20px;
    }
    p{
        text-align: center;
        font-size: 13px;
        margin-top: 10px;
    }

    @media (max-width: 1020px) {
        img {
            width: 50px;
            height: 50px;
            margin: 0 20px;
        }
        p {
            font-size: 12px;
        }
    }
    @media (max-width: 410px) {
        img {
            width: 40px;
            height: 40px;
        }
    }
`;