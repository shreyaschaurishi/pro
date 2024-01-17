import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom';
import ProductService from '../service/ProductService';
const ProductCard=()=> {
 const params=useParams();
 const [formdetails,setformdetails]=useState({pid:"",
    pname:"",qty:"",price:""})
useEffect(()=>{
   ProductService.getById(params.pid)
   .then((result)=>{
    console.log(result.data);
    setformdetails({...result.data});
   }) 
},[])
  return (
    <div>
    <div class="card" style={{"width":" 18rem"}}>
    <div class="card-body">
      <h5 class="card-title">{formdetails.pname}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{formdetails.qty}</h6>
      <p class="card-text">{formdetails.pid}</p>
      
    </div>
    <Link to="/list">
     <button type="button" name="btn" id="btn" value="btn">back</button>
    </Link>
  </div>
  </div>
  )
}
export default ProductCard;