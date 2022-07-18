import styled from "styled-components";


export const Image = styled.img`
width: 100%;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 1200px;
padding: 90px;
`;


export const H2 = styled.h2`
text-align: center;
margin-bottom: 10px;
`;

export const Instrucao = styled.p`
text-align: center;
margin: 20px 0 0 0;
`;

export const Divisor = styled.hr`
background: rgb(208, 208, 208);
height: 1px;
width: 100%;
margin: 100px 0 35px 0;
`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
width: 100%;

textarea {
    min-height: 100px;
    max-height: 200px;
    min-width: 50%;
    max-width: 100%;
}
`;

export const Aviso = styled.p`
font-weight: 500;
margin-bottom: 100px;

strong {
    font-weight: 600;
    color: #bd041a;
}
`;

