import styled from "styled-components"

export const PortContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;

    img {
        width: 80px;
        height: 80px;
        margin: 0 20px;
    }
    
    @media (max-width: 1040px) {
        flex-direction: column;
    }
    
`;

export const leftSide = styled.div`
    display: flex;
    justify-content: center;
    width: 450px;
    height: 300px;

    img {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }

    @media (max-width: 700px) {
        width: 450px;
    }

    @media (max-width: 484px) {
        width: 310px;
    }
`;

export const RightSide = styled.div`
    width: 450px;
    height: 300px;
    padding: 20px;
    background-color: #282368;

    @media (max-width: 700px) {
        width: 450px;
    }
    @media (max-width: 484px) {
        width: 310px;
        height: auto;
    }
`;

export const AreaTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    img {
        width: 30px;
        height: 30px;
        margin: 0;
        margin-right: 5px;
    }
    
    @media (max-width: 410px) {
        font-size: 13px;

        img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    }
`;
export const BodyArea = styled.div`
    margin: 20px 0;

    p {
        color: #eee;
        font-size: 17px;
        margin-bottom: 20px;
    }
    
    .btn {
        width: auto;
        height: 40px;
        margin-right: 10px;
        padding: 7px 10px;
        border-radius: 6px;
        cursor: pointer;
        outline: 0;
        
        &:hover {
            opacity: .7;
        }
    }
    @media (max-width: 410px) {
        p {
            font-size: 15px;
            margin-bottom: 20px;
        }
    }
`;
