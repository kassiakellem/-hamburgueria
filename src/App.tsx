import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import Nav from './components/nav';
import Main from './components/main';
import HomePage from './page/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cardapio from './page/cardapio/Cardapio';
import Promocao from './page/promocao/Promocao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='/promoção' element={<Promocao />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
