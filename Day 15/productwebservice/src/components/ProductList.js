import React from 'react'
import ProductDetails from './ProductDetails';
import ProductFrom from './ProductFrom';
{/* step- 4 add productList component */}
const ProductList=(props)=>{
    const adddata=(p)=>{
        console.log("in insertProduct ProductList",p)
        props.isertProduct(p);

    }

  return (
    <div>
     <button type="button" name="btn" className="btn btn-primary" >Add new Product</button>&nbsp;&nbsp;&nbsp;
    {/* step-5 add productDetails component */}
      {props.parr.map(p=><ProductDetails key={p.pid} product={p}></ProductDetails>)}
      {/* step 6 add productForm */}
      <ProductFrom addproduct={adddata}></ProductFrom>}
    </div>
  )
}
export default ProductList;