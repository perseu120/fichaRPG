import styled from "styled-components";
import ImgHeader from "../../img/imgHeaderEscuro.png";
import Input from "../../../../components/inputs";

export default function HeaderImg(){
    return(
        <Container>
            <ContainerInput left={"100px"} bottom={"28%"}>
                <Input width="270px" height="20px" type="text" placeholder="Nome do personagem"/>
            </ContainerInput>

            <ContainerInput left={"570px"} bottom={"46%"}>
                <Input width="160px" height="20px" type="text" placeholder="classe e nivel"/>
            </ContainerInput>

            <ContainerInput left={"780px"} bottom={"46%"}>
                <Input width="160px" height="20px" type="text" placeholder="antecedente"/>
            </ContainerInput>

            <ContainerInput left={"990px"} bottom={"46%"}>
                <Input width="160px" height="20px" type="text" placeholder="Nome do jogador"/>
            </ContainerInput>

            <ContainerInput left={"570px"} bottom={"24%"}>
                <Input width="160px" height="20px" type="text" placeholder="raça"/>
            </ContainerInput>

            <ContainerInput left={"780px"} bottom={"24%"}>
                <Input width="160px" height="20px" type="text" placeholder="alinhamento"/>
            </ContainerInput>

            <ContainerInput left={"990px"} bottom={"24%"}>
                <Input width="160px" height="20px" type="text" placeholder=" pontos de Xp"/>
            </ContainerInput>

        </Container> 
    );
}

const Container = styled.header`

    background-image: url(${ImgHeader});
    background-size: 1280px 200px;
    background-repeat: no-repeat;
    min-height: 200px;
    max-width: 1280px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #383c42; 

`

const ContainerInput = styled.div`
    height: auto;
    position: absolute;
    left: ${({ left }) => left || 'auto' };
    bottom: ${(bottom) => bottom || 'auto'};
`   