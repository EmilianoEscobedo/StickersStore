import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Product from '../containers/Product'
import UseContexts from '../context/UseContexts';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

function App() {
  return (
      <BrowserRouter>
        <PayPalScriptProvider
          options={{'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID}}
        >
          <UseContexts>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/cart' element={<Cart />}></Route>
                <Route exact path='/product' element={<Product />}></Route>
              </Routes>
            </Layout>
          </UseContexts>
        </PayPalScriptProvider>
      </BrowserRouter>
  );
}

export default App;
