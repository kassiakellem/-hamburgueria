import Flex from "../../Styles/styledComponent/Flex";
import globalStyle from "../../Styles/globalCss";
import Text from "../../Styles/styledComponent/Text";
import { fadein } from "../../Styles/keyframes";
import CardapioDB from "../../Json/db.json"
import Cardlista from "../../components/card/Cardlista";


console.log(CardapioDB.Cardapio);

function Cardapio() {
    globalStyle();

    // crie uma variavel css
    // const CardContainer = styled.div`
    // display: inline-flex
    // width: 50vh;
    // height: 50vh;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // background: #1f2229;
    // overflow: hidden;
    // flex-direction: row-reverse
    // margin-left: 10px;
    // margin-right: 10px;`
    // ;


    const itemCardapio = CardapioDB.Cardapio[2];
    const cardapio = CardapioDB.Cardapio;
    return (
        <Flex
            dir={"column"}
            justify="around"
            css={{
                width: "100%",
                height: "100%",
                opacity: "0",
                animation: `1s ease-in 1s 1 both ${fadein}`,
            }}
        >
            <Text>
                Saboreie o melhor Hamburguer 
            </Text>

            {/* <Card id={itemCardapio.id} capa={itemCardapio.capa} titulo={itemCardapio.titulo} /> */}
            <Cardlista listas={cardapio} />

        </Flex>
    );
}
export default Cardapio;
