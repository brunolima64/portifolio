import styled from "styled-components";


export const PageContainer = styled.div`
    margin: auto;
    width: 1000px;
    color: #FFF;

`;

export const Presentation = styled.div`
    height: 700px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-side {
        padding: 10px;
        color: #FFF;

        h2 {
            margin-left: 5px;
            text-shadow: 1px 1px 4px black;
            color: #e1e1fa;
        }

        h1 {
            margin: 0;
            line-height: 110px;
            font-size: 110px;
            text-shadow: 2px 2px 6px black;
            color: #e1e1fa;
        }
        .TitleReact {
            display: flex;
            align-items: center;
        }
        .titleLinks {
            margin-left: 50px;
        }
    }

    .right-side {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 210px;
        height: 210px;
        border-radius: 50%;
        background-color: #85bbe0;
        border: 1px solid aqua;
        box-shadow: 0px 0px 10px 1px aqua;

        
        img {
            width: 200px;
            height: 200px; 
            background-image: url('../../assets/images/foto.png');
            background-size: cover;
            background-position: top;
            border-radius: 50%;
        }
    }
`;

export const About = styled.div`
    border-left: 2px solid aqua;
    padding: 20px;
    margin: 10px 0;
    background-color: rgb(40, 35, 104);

    h1 {
        margin: 20px 0;
    }
    p {
        font-size: 19px;
        color: #ccc;
        line-height: 27px;
    }
`;

export const Skills = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(40, 35, 104);
    padding: 15px;
    margin: 40px 0;

    h1 {
        margin: auto;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .icons {
        display: flex;
        justify-content: center;
    }
`;

export const Portfolio = styled.div`

    border-bottom: 3px dashed white;

    p{
        opacity: .8;
        font-size: 16px;
        line-height: 22px;
    }

    .listProjetos {
        display: flex;
        justify-content: end;

    }
    .listProjetos button {
        font-size: 14px;
        background-color: white;
        border: 0;
        color: black;
        border-radius: 6px;
        width: auto;
        height: 40px;
        margin-right: 10px;
        margin-top: 20px;
        margin-bottom: 60px;
        padding: 7px 10px;
        cursor: pointer;
        outline: 0;
        
        &:hover {
            opacity: .7;
        }
        outline: 0;
        cursor: pointer;
    }
`;
export const Contact = styled.div`
    background-color: rgb(40, 35, 104);
    padding: 20px;
    border-left: 2px solid aqua;
    margin: 20px 0;

    h1 {
        padding-bottom: 10px;
    }

    .ctc {
        display: flex;
        align-items: center;
        margin: 20px 0;

        p {
            margin-left: 20px;
            font-size: 19px;
        }
    }

    .link {
        color: white;

        &:hover {
            opacity: .7;
        }
    }
`;