import styled from "styled-components";


export const FlexWrapper = styled.div`
    display: flex;
    
    > div {
        width: 200px;
    }

    .styleCampo{
        font-weight: bold;
        font-size: 18px;
    }

`;

export const ButtonContainer = styled.div`
    width: 50px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const ProductContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    svg {
        cursor: pointer;
    }
`;

export const AbsoluteContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 444px;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg{
        margin-left: 8px;
    }
`;

export const Container = styled.div`
    background-color: #BEBEBE;
`;

