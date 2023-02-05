import React, { useRef } from 'react'
import { errorToast, isEmpty, successToast } from '../../helper/Validation';
import { useNavigate } from 'react-router';
import {Create} from '../../backendApi/CRUD'
import Spinner from '../Loader/Spinner';


const CreateForm = () => {

  let Name, Code, Image, Price, Quantity, TotalPrice, Loader = useRef();

  const navigate = useNavigate()

  const saveData = ()=>{
     let product_name = Name.value;
     let product_code = Code.value;
     let product_image = Image.value;
     let product_price = Price.value;
     let product_quantity = Quantity.value;
     let totalPrice = TotalPrice.value;


    if(isEmpty(product_name)){
      errorToast("product name is required")
    }
    else if(isEmpty(product_code)){
      errorToast("product code is required")
    }
    else if(isEmpty(product_image)){
      errorToast("product image is required")
    }
    else if(isEmpty(product_price)){
      errorToast("product price is required")
    }
    else if(isEmpty(product_quantity)){
      errorToast("product quantity is required")
    }
    else if(isEmpty(totalPrice)){
      errorToast("total price is required")
    }
    else{
      Loader.classList.remove("d-none")
      Create(product_name, product_code, product_image, product_price, product_quantity, totalPrice).then((result)=>{
        Loader.classList.add("d-none")
        if(result===true){
          successToast("Data Save Successfully")
          navigate("/")
        }else{
          errorToast("Request Fail try again")
        }
      })

    }
  }


  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-4 p-2'>
          <label>Product Name</label>
          <input ref={(input)=>Name=input} type="text" className='form-control'/>
        </div>
        <div className='col-md-4 p-2'>
          <label>Product Code</label>
          <input ref={(input)=>Code=input} type="text" className='form-control'/>
        </div>
        <div className='col-md-4 p-2'>
          <label>Product Image</label>
          <input ref={(input)=>Image=input} type="text" className='form-control'/>
        </div>
        <div className='col-md-4 p-2'>
          <label>Product Price</label>
          <input ref={(input)=>Price=input} type="text" className='form-control'/>
        </div>
        <div className='col-md-4 p-2'>
          <label>Product quantity</label>
          <input ref={(input)=>Quantity=input} type="text" className='form-control'/>
        </div>
        <div className='col-md-4 p-2'>
          <label>Total Price</label>
          <input ref={(input)=>TotalPrice=input} type="text" className='form-control'/>
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-md-4 p-2'>
          <button onClick={saveData} className='btn btn-primary w-100'>Save</button>
        </div>
      </div>

      <div className='d-none' ref={(div)=>Loader=div}>
        <Spinner/>
      </div>
    </div>
  )
}

export default CreateForm
