import React from "react";
import Nav from "../../components/nav";
import Flex from "../../Styles/styledComponent/Flex";
import globalStyle from "../../Styles/globalCss";
import Text from "../../Styles/styledComponent/Text";
import Main from "../../components/main";
import { fadein } from "../../Styles/keyframes";
// import { fadein } from "../Styles/keyframes";

function Cardapio() {
    globalStyle()
    return (
        <Flex
            dir={"column"}
            justify="around"
            css={{
                width: "100%",
                height: "100%",
                // opacity: "0",
                // animation: `1s ease-in 1s 1 both ${fadein}`,
            }}
        >
            <Text
            >
                Saboreie o melhor Hamburguer <br />
                da culinária  <br />
                em cada mordida.
            </Text>

        </Flex>
    )
}
export default Cardapio;