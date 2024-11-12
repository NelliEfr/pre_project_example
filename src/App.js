import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import ModalWindow from './components/ModalWindow';
import { useState } from 'react';
import { Context } from './context';
import { useDispatch } from 'react-redux';
import { clearCartAction } from './store/reducers/cartReducer';

function App() {

  const dispatch = useDispatch();

  const [ modalActive, setModalActive ] = useState(false);
  const [ menuActive, setMenuActive ] = useState(false);

  const closeModalWindow = () => {
    setModalActive(false);
    dispatch(clearCartAction());
  }

  const openModalWindow = () => setModalActive(true);

  const openMenu = () => setMenuActive(true);
  const closeMenu = () => setMenuActive(false);

  return (
    <div>
      <Context.Provider value={{ closeModalWindow, openModalWindow, modalActive, openMenu, closeMenu, menuActive }}>
        <ModalWindow />
        <Header />
        <main className='wrapper'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/all_products' element={<AllProductsPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/categories/:category_name' element={<ProductsByCategoryPage />} />
            <Route path='/products/:product_id' element={<SingleProductPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>  
      </Context.Provider>
    </div>
  );
}

export default App;
