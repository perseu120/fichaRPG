import styled from "styled-components";
import ImgHeader from "../../img/imgHeaderEscuro.png";
import Input from "../../../../components/inputs";

export default function headerImg(){
    return(
        <Container>
            <Div><Input width="350px" height="30px" type="text" placeholder="Nome do personagem"/></Div>
        </Container>
    );
}

const Container = styled.div`

    background-image: url(${ImgHeader});
    background-size: 100% auto;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #383c42; 

`

const Div = styled.div`
    height: auto;
    position: absolute;
    bottom: 550px;
    left: 210px;
`   