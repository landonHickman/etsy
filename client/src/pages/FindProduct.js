import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Select } from 'semantic-ui-react'

const FindProduct = () => {
  const [sellers, setSellers] = useState([])

  useEffect(()=>{
    getSeller()
  },[])

  const getSeller = async () => {
    try{
      let res = await axios.get(`/api/sellers`)
      setSellers(res.data)
    }catch(err){
      console.log('err',err)
      console.log('err.response',err.response)
    }
  }

  const sellerOptions = () => {
    return sellers.map(s => ({key: s.id, text: `${s.name} ${s.item_count} Items`, value: s.id }))
  }
  const handleChange = () => {
    //TODO:
  }

  return (
    <div>
      <h1>FindProduct</h1>
      <Select onChange={handleChange} placeholder='Select Seller' options={sellerOptions()}/>
    </div>
  )
}

export default FindProduct