import React from 'react'
import { Product } from '../product'
import {useState} from 'react'
{/* step 6 add productForm */}
const ProductFrom=(props)=>{
    const [formdetails,setformdetails]=useState({pid:"",pname:"",qty:"",price:""})
    const addnewProd=()=>{
        //validation can be done here
        if(formdetails.pid==="" || formdetails.pname==="" || formdetails.qty==="" || formdetails.price===""){
            alert("data cannot be blank");
            return;
        }
        //convert formdata in to product object
        let p=new Product(formdetails.pid,formdetails.pname,formdetails.qty,formdetails.price);
        //send product to parent ProductList
        props.addproduct(p);
        setformdetails({pid:"",pname:"",qty:"",price:""})
    }
    const handlechange=(event)=>{
        //const name=event.target.name;
        //const value=event.target.value
        let {name,value}=event.target
        setformdetails({...formdetails,[name]:value})
        //setformdetails({...formdetails,pid:event.target.value})
    }
    {/* step 7 add form and onclick event and onchange event */}
  return (
    <div>
    <form>
    <div className="form-group">
      <label htmlFor="pid">Product Id</label>
      <input type="text" className="form-control" name="pid" id="pid" 
     value={formdetails.pid}
     onChange={handlechange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="pname">Product Name</label>
      <input type="text" className="form-control" name="pname" id="pname"
      value={formdetails.pname}
     onChange={handlechange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="qty">Product Qty</label>
      <input type="text" className="form-control" name="qty" id="qty" 
        value={formdetails.qty}
     onChange={handlechange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="price">Product Price</label>
      <input type="text" className="form-control" name="price" id="price"
        value={formdetails.price}
     onChange={handlechange}
      />
    </div>
    <button type="button" className="btn btn-primary" onClick={addnewProd}>Add Product</button>
  </form>
  </div>
  
  )
}
export default  ProductFrom;