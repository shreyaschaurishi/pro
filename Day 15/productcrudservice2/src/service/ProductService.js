import { Product } from "../product";
import axios from 'axios';
let baseURL="http://localhost:9191/products";
class ProductService{
    constructor(){
        this.prodarr=[new Product(11,'Chair',23,4444),
        new Product(12,'table',45,4567),
        new Product(13,'shelf',45,4678),
        new Product(14,'plastic chair',77,777)];
    }
    getAllProducts(){
        return axios.get(baseURL);
    }
    addProduct(p){
        console.log("in service",p)
       return axios.post(baseURL+"/product/"+p.pid,p)
    }
    updateProduct(p){
        console.log("in service",p)
       return axios.put(baseURL+"/product/"+p.pid,p)
    }
    getById(pid){
        return axios.get(baseURL+"/"+pid);
    }
    deleteProduct(pid){
        return axios.delete(baseURL+"/"+pid);
    }
}
export default new ProductService();