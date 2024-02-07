import { Link } from "react-router-dom";
import Cardapio from "../../page/cardapio/Cardapio";
import Text from "../../Styles/styledComponent/Text";
import styled from "styled-components";

// recebe um props que estou descontruindo
// defino as propriedades que vem nesse objeto(props), ou seja, defino seu tipo
// const {id, capa, titulo} = props;
export function Card({ id, capa, titulo }: {
    id: number, capa: string, titulo?: string | "titulo faltando"
}) {

    return (<Link style={{ marginLeft: "10px", marginRight: "10px", border: "10px solid #ff944d" }} to={`/${id}`}>
        <img width={"230px"} height={"230px"} src={capa} alt={titulo} />
        <Text>{titulo}</Text>
    </Link>)
}



export default Card;