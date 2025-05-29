import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL= "https://ominous-couscous-9ww9q9556772wg-5000.app.github.dev/";

axios.interceptors.response.use((response)=>{
     console.log("Success")
      return response;
}, (error) =>{
     const { data, status} = error.response
     switch (status) {
          case 404:
               toast.error("404 not found exception!")
               break;
     
          default:
               toast.warning("Internal Server")
               break;
     }
     
     return Promise.reject(error.message)
})

const methods = {
     get:(url) => axios.get(url).then(response => response.data),
     post:(url) => axios.post(url, body).then(response => response.data),
     put:(url) => axios.put(url, body).then(response => response.data),
     delete:(url) => axios.delete(url).then(response => response.data)
}

const products = {
    list:() => methods.get('products'),
    details:(id) => methods.get(`products/${id}`)
}

const requests = {
     products
}

export default requests;