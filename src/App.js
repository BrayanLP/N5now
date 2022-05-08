
import React, { useEffect, useState } from 'react';
import './App.css'; 
import Header from './component/header'; 
import Pos from './views/pos';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from './actions/product';
import { getAllCart  } from './actions/cart'
import Overlay from './component/overlay';
import Orders from './component/orders';
import HeaderMobile from './component/headerMobile';
function App() {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const [menuRight, setMenuRight] = useState(false);

  const products = useSelector(state => state.products);
  const carts = useSelector(state => state.carts.data) || [];

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllCart())
  }, [])

  const openLeft = () => { 
    setMenu(!menu)
  }
  const close = () =>{
    setMenu(false)
    setMenuRight(false)
  }
  const openRight = () => { 
    setMenuRight(!menuRight)
  }
  return (
    <div className="App">
      <HeaderMobile openLeft={openLeft} openRight={openRight}></HeaderMobile>
      <Header active={menu}></Header>
      <div className="wrapper">
        <Pos products={products}></Pos>
        <Orders active={menuRight  } carts={carts}></Orders>
      </div>
      <Overlay 
        active={menu  || menuRight}
        onClick={close}
      > 
      </Overlay>
    </div>
  );
}

export default App;
