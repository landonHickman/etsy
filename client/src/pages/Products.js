import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RenderTable from '../components/RenderTable'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts()
  },[])

  const normalizeProducts = (prod) => {

    const sell_id = prod.map(p=> p.seller_id)
    // console.log('sell_id',sell_id)
    
    const uniqueId = [...new Set(sell_id)]
    // console.log('uniqueId',uniqueId)

    const productData = []
    // console.log('productData',productData)

    uniqueId.forEach(id => {

      //creates a new array for each time ap.seller_id === id
      let productsFiltered = prod.filter(ap => ap.seller_id === id)
      // console.log('productsFiltered',productsFiltered)

      const clean = productsFiltered.map(c=> {
        return {
          category: c.category,
          description: c.description,
          price: c.price,
          product_id: c.product_id,
          product_name: c.product_name,
        }
      })
      // console.log('clean',clean)

      let {seller_id, seller_name, seller_email } = productsFiltered[0]

      productData.push({
        seller_id,
        seller_name,
        seller_email,
        products: clean
      })
    })
    setProducts(productData)
    // console.log('productData',productData)
  }

  const getProducts = async () => {
    try{
      let res = await axios.get(`/api/products`)
      normalizeProducts(res.data)
    }catch(err){
      alert('err')
      console.log(err)
      console.log(err.response)
    }
  }

  return (
    <div>
      {products.map(p=> {
          return(
            <RenderTable key={p.seller_id} {...p}/>
          )
      })}
    </div>
  )
}

export default Products