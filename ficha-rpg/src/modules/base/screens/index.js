import styled from "styled-components";
import HeaderImg from "../components/imgHeader";

export default function ScreenBase(){
    return(
        <Container>
            <HeaderImg/>  
            <CharacterSheetBody>

                <div>
                    <h1>
                        habilidade
                    </h1>
                </div>
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

const CharacterSheetBody = styled.div`
    
    display: flex;
    flex-wrap: nowrap;
    flex: 1;
    min-width: 1280px;

    div{
        display: flex;
        flex: 1;
        border: solid 2px;
        height: 300px;
        box-sizing: border-box;
    }
`;