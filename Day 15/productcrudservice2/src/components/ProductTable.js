import ProductService from "../service/ProductService";
import {useState,useEffect} from 'react'
const ProductTable=(props)=>{
    const[prodarr,setprodarr]=useState([]);

    //this useeffect will get executed only once at the time 
    //of initialization of component
    //in class component same thing will be added in lifecycle
    //method componentDidMount
    useEffect(()=>{
      //let arr=ProductService.getAllProducts()
      //setprodarr(arr);
      ProductService.getAllProducts()
      .then((result)=>{
        console.log(result)
        setprodarr([...result.data]);
      })
    },[])
   return (
    <div>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product id</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {/* use map function to covert array into rows of the table */}
    {prodarr.map(p=><tr key={p.pid}>
        <td>{p.pid}</td>
        <td>{p.pname}</td>
        <td>{p.qty}</td>
        <td>{p.price}</td>
    </tr>)}
  </tbody>
</table>
    </div>
   ) 

}

export default ProductTable;