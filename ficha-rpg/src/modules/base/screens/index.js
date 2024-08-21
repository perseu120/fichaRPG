import styled from "styled-components";
import HeaderImg from "../components/imgHeader";
import Ability from "../components/ability";

export default function ScreenBase(){
    return(
        <Container>
            <HeaderImg/>  
            <CharacterSheetBody>

                <ContainerEsqueda>
                    <ContainerAbility>
                        <Ability top={"210px"} left={"60px"}> forca </Ability>
                        <Ability top={"350px"} left={"60px"}> destreza </Ability>
                        <Ability top={"490px"} left={"60px"}> constituicao </Ability>
                        <Ability top={"630px"} left={"60px"}> inteligencia </Ability>
                        <Ability top={"770px"} left={"60px"}> sabedoria </Ability>
                        <Ability top={"900px"} left={"60px"}> carisma </Ability>
                    </ContainerAbility>

                    <div>

                    </div>
                </ContainerEsqueda>
                <div>
                    <h1>
                        atributos
                    </h1>
                </div>
                <div>
                    <h1>
                       caracteristicas
                    </h1>
                </div>
            </CharacterSheetBody>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 200px;
    min-width: 1280px;
    position: absolute;
    left: 0;
`;
const ContainerAbility = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
`;
const ContainerEsqueda = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    
`;
const CharacterSheetBody = styled.div`
    
    display: flex;
    flex-wrap: nowrap;
    flex: 1;
    min-width: 1280px;
    
    div{
        display: flex;
        flex: 1;
        border: solid 2px;
        box-sizing: border-box;
    }
`;