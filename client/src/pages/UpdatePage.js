import React from 'react'
import NavBar from '../components/Nav/NavBar'
import UpdateForm from '../components/Update/UpdateForm'
import { useParams } from 'react-router'

const UpdatePage = () => {

  const params = useParams();

  return (
    <div>
        <NavBar/>
        <UpdateForm id={params["id"]}/>
    </div>
  )
}

export default UpdatePage
