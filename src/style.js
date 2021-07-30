import styled from "styled-components";


export const StyleForm = styled.form`
    display: flex;
    align-items: center;
    flex-flow: column;

    .buttons{
        button{
            margin-right:10px;
        }
    }
`;

export const InputText = styled.input`
    display: flex;
    width: 300px;
    height: 25px;
    align-items: center;
    border-radius: 10px;
    margin:12px 0;

`;

export const Title = styled.h1`
    align-items: center;
    display: flex;
    justify-content: center;


`;