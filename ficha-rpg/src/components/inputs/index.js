import styled from "styled-components";

export default function Input({type, placeholder, width, height}){

    return(
        <ContainerInput width ={width} height={height} type={type} placeholder={placeholder || ""} >
        </ContainerInput>
    );
}

const ContainerInput = styled.input`
    width: ${({ width }) => width || 'auto' };
    height: ${(height)=> height || 'auto'};
    padding: 8px 15px;
    margin-top: 5%;
    font-size: 26px;
    background-color: #383c42;
`