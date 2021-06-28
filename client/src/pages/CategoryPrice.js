import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Pie } from 'react-chartjs-2';

const CategoryPrice = () => {
  const [category, setCategory ]= useState([])
  const [totalPrice, setTotalPrice]= useState([])

  useEffect(()=>{
    getCategory()
  },[])

  const getCategory = async () => {
    try{
      let res = await axios.get('/api/products/category_sum')
      console.log(res.data)
      normalizeCategory(res.data)
    }catch(err){
      console.log(err)
      console.log(err.response)
    }
  }

  const normalizeCategory = (norm) => {
    const catName = norm.map(n => {
      return n.category
    })
    const catSum = norm.map(n => {
      return n.total_price
    })
    setCategory(catName)
    setTotalPrice(catSum)
  }

  const data = {
    labels: category,
    
    datasets: [
      {
        label: 'Sum of Category',
        data: totalPrice,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Total Price By Category</h1>
    <div style={{height:'700px'}}>
        <Pie data={data} options={{responsive: true, maintainAspectRatio: false}}/>
    </div>
    </div>
  )
}
export default CategoryPrice