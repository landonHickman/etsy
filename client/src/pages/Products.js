import React from 'react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import RenderTable from '../components/RenderTable'

const Products = () => {
  const {data} = useAxiosOnMount(`/api/products`)


  return (
    <div>
      <h1>Products</h1>
      <RenderTable table={data}/>
    </div>
  )
}

export default Products