import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Select } from 'semantic-ui-react'
import RenderCategoryItems from '../components/RenderCategoryItems'

const Category = () => {
  const [categories, setCategories] = useState([])
  const [categoryItems, setCategoryItems] = useState(null)

  useEffect(()=>{
    getCategory()
  },[])

  const getCategory = async() => {
    try{
      let res = await axios.get(`/api/products/category`)
      setCategories(res.data)
    }catch(err) {
      alert('err')
      console.log(err)
      console.log(err.response)
    }
  }

  const normalizeCategory = () => {
      return categories.map( c => ({key: c.category, value: c.category.toLowerCase(), text: c.category}))
  }

  const handleChange = async (e, {value}) => {
    try {
      let res = await axios.get(`/api/products/${value}`)
      setCategoryItems(res.data)
    } catch (err) {
      console.log('err',err)
      console.log('err.response',err.response)
    }
  }

  return(
    <div>
      <Select onChange={handleChange} placeholder='Select Category' options={normalizeCategory()} />
      {categoryItems && <RenderCategoryItems categoryItems={categoryItems}/>}
    </div>
  )
}

export default Category