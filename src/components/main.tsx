import React from "react";
import Ico_Facebook from "../asesst/Icons/Ico_facebook";
import Ico_Instagram from "../asesst/Icons/Ico_instagram";
import Ico_WhatsApp from "../asesst/Icons/Ico_whatsapp";
import { fadein } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Main() {
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
      <Text
        css={{
          display1: "800",
          paddingTop: "$7",
          "@bp2": {
            display2: "800",
          },
          "@bp4": {
            display3: "800",
          },
          "@bp5": {
            headline1: "800",
          },
        }}
      >
        Saboreie o melhor Hamburguer <br/>
        da culinária  <br/>
        em cada mordida.
      </Text>

      <Text
        css={{
          paddingTop: "$3",
          subhead1: "500",
          "@bp4": {
            paddingTop: "$1",
            subhead1: "400",
          },
        }}
      >
        Uma explosão de sabores feito com ingredientes frescos e selecionados, 
        <br/> 
        Cada pedaço é uma experiência única,
        <br/>
         Descubra o verdadeiro significado do prazer 
<br/> Satisfaça seus desejos agora mesmo!
      </Text>

      <Flex
        css={{
          paddingTop: "$5",
        }}
      >
        <Text
          cursor={"click"}
          css={{
            color: "#ffffff",
            backgroundColor: "#cc0000",
            headline6: "600",
            padding: "$1 $3",
            borderRadius: "8px",
            boxShadow: "$1dp",
            "&:hover": {
              color: "#fffff",
              backgroundColor: "#e65c00",
            },
            "&:active": {
              boxShadow: "none",
              color: "$onPrimary",
              backgroundColor: "$primary600",
            },
          }}
        >
         Peça Já!
        </Text>
        <Text
          cursor={"click"}
          css={{
            border: "1px solid #ffffff",
            color: "#ffffff",
            backgroundColor: "$primary200",
            headline6: "600",
            padding: "$1 $3",
            borderRadius: "8px",
            marginLeft: "$3",
            "&:hover": {
              color: "#ffffff",
              backgroundColor: "#e65c00",
            },
            "&:active": {
              boxShadow: "none",
              color: "$onPrimary",
            },
          }}
        >
          Promoção
        </Text>
      </Flex>

      <Text
        css={{
          subhead2: "500",
          color: "$onBg800",
          paddingTop: "$2",
        }}
      >
        
      </Text>

      <Flex
        justify={"start"}
        css={{
          width: "100%",
          // backgroundColor:"$onBg",
          // paddingTop:"$6",
          "& svg": {
            fill: "rgb(255, 255, 204)",
            cursor: "pointer",
            marginRight: "$3",
            "&:hover": {
              fill: "$onBg",
              transform: "scale(1.1)",
              // transition:"all 0.5s",
            },
          },
        }}
      >
        <Ico_Facebook width="32" height="32" />
        <Ico_Instagram width="32" height="32" />
        <Ico_WhatsApp width="32" height="32" />
      </Flex>
    </Flex>
  );
}

export default Main;
