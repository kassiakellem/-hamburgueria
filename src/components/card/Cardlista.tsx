import { Key } from "react";
import { Card } from "./card";
import CardapioDB from "../../Json/db.json";
import Flex from "../../Styles/styledComponent/Flex";

function Cardlista({ listas }) {
    return (
        <Flex
            dir={"row"}
            justify="center"
            css={{
                "& p": {
                    headline6: "700",
                    cursor: "pointer ",
                    padding: "0 $3",
                    color: "#2e2e1f",
                    border: "1px solid #ffffff",
                    backgroundColor: "#ff944d",
                    "&:hover": {
                        color: "#cc0000",
                    },
                },
            }}
        >
            {listas.map((lista: { id: number; capa: any; titulo: any }) => {
                return (
                    <Card
                        id={lista.id}
                        key={lista.id}
                        capa={lista.capa}
                        titulo={lista.titulo}
                    />
                );
            })}
        </Flex>
    );
}
export default Cardlista;
