import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Delete, Read } from '../../backendApi/CRUD'
import { errorToast, successToast } from '../../helper/Validation';
import Spinner from '../Loader/Spinner';

const ListTable = () => {

  let [dataList, setDataList] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    Read().then((Result)=>{
      setDataList(Result)
    })
  },[])

  const deleteItem = (id)=>{
    Delete(id).then((result)=>{
      if(result===true){
        successToast("Delete item Success")
        setDataList(result)
        // navigate("/")
      }else{
        errorToast("something is wrong. try again")
      }
    })
  }

  const updateItem = (id)=>{
    navigate("/update/" +id)
  }

  if(dataList.length>0){
    return (
      <div>
        <table className='table table-bordered my-4'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Product Image</th>
              <th>Product Price</th>
              <th>Product quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {

              dataList.map((item, i)=>{
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td><img alt='' className="list-img" src={item.image} /></td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.totalPrice}</td>
                    <td>
                      <button onClick={deleteItem.bind(this,item._id)} className='btn btn-danger mx-1'>Delete</button>
                      <button onClick={updateItem.bind(this, item._id)} className='btn btn-primary mx-1'>Update</button>
                    </td>
                  </tr>
                )
              })

            }
          </tbody>
        </table>
      </div>
    )
  }else{
    return (
      <div>
        <Spinner/>
      </div>
    )
  }

  
}

export default  ListTable
