import styled from "styled-components"

export const PortContainer = styled.div`

    display: flex;
    margin-top: 40px;

    img {
        width: 80px;
        height: 80px;
        margin: 0 20px;
    }
`;

export const leftSide = styled.div`
    display: flex;
    justify-content: center;
    width: 500px;
    height: 300px;

    img {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }
`;

export const RightSide = styled.div`
    width: 500px;
    height: 300px;
    padding: 20px;
    background-color: #282368;
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
`;
