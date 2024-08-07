import styled from "styled-components";

export default function Input({type, placeholder, width, height, border}){

    return(
        <ContainerInput width ={width} height={height} type={type} border={border} placeholder={placeholder || ""} >
        </ContainerInput>
    );
}

const ContainerInput = styled.input`
    width: ${({ width }) => width || 'auto' };
    height: ${(height)=> height || 'auto'};
    border-radius: ${(border)=> border || 'auto'};
    
    margin-top: 5%;
    font-size: 26px;
    background-color: #383c42;
`