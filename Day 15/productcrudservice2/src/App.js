import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/HomeComponent';
import ProductTable from './components/ProductTable';
import ProductFrom from './components/ProductFrom';
import { Product } from './product';
import ProductList from './components/ProductList';
import MainNavBar from './components/MainNavBar';
import {Routes,Route} from 'react-router-dom';
import ProductEdit from './components/ProductEdit';
import ProductCard from './components/ProductCard';
function App() {
  return (
    <div>
       <h1 style={{"backgroundColor":"blue",color:"white","border":"2px solid red"}}>Product Management System</h1>
       {/* step3  */}
       <MainNavBar></MainNavBar>
       <Routes>
            <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/table" element={<ProductTable></ProductTable>}></Route>
            <Route path="/list" element={<ProductList></ProductList>}></Route>
            <Route path="/form" element={<ProductFrom></ProductFrom>}></Route>
            <Route path="/edit/:pid" element={<ProductEdit></ProductEdit>}></Route>
            <Route path="/view/:pid" element={<ProductCard></ProductCard>}></Route>
           
       </Routes>
       
    </div>
  );
}

export default App;
