import styled from "styled-components";


export default function Ability({children, left, top}){
    return(
        <Container top={top} left={left} >

            <Attribute> {children}</Attribute>
            <Bonus> +5 </Bonus>
            <CircleInput type={"number"} />
        </Container>
    );
}

// como o position é absolute, tem que setar a posição dele manualmente
// então fazer le receber a posição nanuamente, e adicionar aqui como props

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    height: 100px;
    width: 80px;
    border: solid 2px;
    border-bottom: 0;
    border-radius: 20%;
    background-color: #090909; 
    top: ${({top})=> top};
    left: ${({ left }) => left};
`;

const Attribute = styled.p`
    align-items: center;
    text-align: center;
    font-size: medium;
    width: 110%;
    height: 20px;
    margin-top: 5px;
    border-radius: 20%;
    background-color: #383c42; 
`;
const Bonus = styled.p`
    font-size: xxx-large;
    box-sizing: border-box;
    position: absolute;
    bottom: 23%;
`;

const CircleInput = styled.input`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-sizing: border-box;
    font-size: x-large;
    color: white;
    padding-left: 10px;
    background-color: #383c42; 
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    position: absolute;
    bottom: -26px;
`;