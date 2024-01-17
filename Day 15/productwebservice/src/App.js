import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import ProductTable from './components/ProductTable';
import { Product } from './product';
import ProductList from './components/ProductList';
function App() {
  //step2 create product array as state, so that changes will be reflected in the o/p
  const [prodarr,setprodarr]=useState([new Product(11,'Chair',23,4444),
new Product(12,'table',45,4567),
new Product(13,'shelf',45,4678)]);
const insertData=(p)=>{
  console.log("in insert data in App.js",p);
  setprodarr([...prodarr,{...p}])

}
  return (
    <div>
       <h1 style={{"backgroundColor":"blue",color:"white","border":"2px solid red"}}>Product Management System</h1>
       <div className="container">
         <div className="row">
            <div className="col-md-6">
               {/*Step3 add product table component*/}
               <ProductTable parr={prodarr}></ProductTable>
            </div>
            <div className="col-md-6">
                 {/* step- 4 add productList component */}
              <ProductList parr={prodarr} isertProduct={insertData}></ProductList>
            </div>
         </div>

       </div>
       
       
    </div>
  );
}

export default App;
