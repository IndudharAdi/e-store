import React, { useState } from 'react';
import './App.css';
 
import { getCategories } from './Fetcher';


import ProductDetail from './components/ProductDetail';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Category from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import OrderConfirmation from './components/OrderConfirmation';
import SearchResults from './components/SearchResults';



function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []});

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);



  return (
    <React.Fragment>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="orderconfirmation" element={<OrderConfirmation />} />
            <Route path="search" element={ <SearchResults /> } />
            <Route path="products/:productId" element={<ProductDetail />}></Route>
            <Route path="categories/:categoryId" element ={<Category />} />
            </Route>
            
            
            {/* <Router path="/checkout" />
            <Route path= "/basket" /> */}
          </Routes>
      
          </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
