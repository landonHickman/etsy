import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StringifyJSON from '../components/StringifyJSON'

const Category = () => {
  const [category, setCategory] = useState([])

  useEffect(()=>{
    getCategory()
  },[])

  const normalizeCategory = (passin) => {
    setCategory(passin)
  }
  const getCategory = async() => {
    try{
      let res = await axios.get(`/api/products/category`)
      console.log(res)
      console.log(res.data)
      normalizeCategory(res.data)
    }catch(err) {
      alert('err')
      console.log(err)
      console.log(err.response)
    }
  }
  return(
    <div>
      <h1>Category Page</h1>
      <StringifyJSON json={category}/>
    </div>
  )
}

export default Category