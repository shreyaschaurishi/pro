import React from 'react'
import {useState,useEffect} from 'react'

import ProductDetails from './ProductDetails';
import ProductFrom from './ProductFrom';
import ProductService from '../service/ProductService';
import {Link} from 'react-router-dom';

{/* step- 4 add productList component */}
const ProductList=(props)=>{
  const[prodarr,setprodarr]=useState([]);
  const fetchdata=()=>{
    ProductService.getAllProducts()
      .then((result)=>{
        console.log(result)
        setprodarr([...result.data]);
      }).catch((err)=>{
        console.log("error occured",err)
      })
  }
    //this useeffect will get executed only once at the time 
    //of initialization of component
    useEffect(()=>{
      console.log("in list initialization useEffect")
      fetchdata();
      //setprodarr(arr);
    },[])
    

  return (
    <div>
    <Link to="/form">
     <button type="button" name="btn" className="btn btn-primary" >Add new Product</button>&nbsp;&nbsp;&nbsp;
     </Link>
    {/* step-5 add productDetails component */}
      {prodarr.map(p=><ProductDetails key={p.pid}  getData={fetchdata} product={p}></ProductDetails>)}
     
      </div>
  )
}
export default ProductList;