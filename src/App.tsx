import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import Nav from './components/nav';
import Main from './components/main';
import HomePage from './page/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cardapio from './page/cardapio/Cardapio';
import Promocao from './page/promocao/Promocao';

const Rotas = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cardapio' element={<Cardapio />} />
      <Route path='/promoção' element={<Promocao />} />
    </Routes>
  </BrowserRouter>;
}


function App() {
  
  return (
    <Flex
      id="wrapper"
      data-testid="app"
      css={{
        position: "relative",
        padding: " $2 $10",
        "@bp1": {
          padding: " $2 $3",
        },
        "@bp2": {
          padding: " $2 $5",
        },
        "@bp5": {
          padding: " $2 $3",
        },
      }}
    >
      <Flex css={{ imgBg: "" }}></Flex>
      <Flex css={{ meshBg: "" }}></Flex>
      <Nav />

      <Rotas/>
    </Flex>
  )
}

export default App;
