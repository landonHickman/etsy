import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Select } from 'semantic-ui-react'

const FindProduct = () => {
  const [sellers, setSellers] = useState([])
  const [buyers, setBuyers] = useState([])
  const [showBuyers, setShowBuyers] = useState(false)

  useEffect(()=>{
    axiosCalls()
  },[])

  const axiosCalls = async () => {
    try{
      let res = await axios.get(`/api/sellers`)
      setSellers(res.data)
      let res1 = await axios.get('/api/buyers')
      setBuyers(res1.data)
    }catch(err){
      console.log('err',err)
      console.log('err.response',err.response)
    }
  }

  const sellerOptions = () => {
    return sellers.map(s => ({key: s.id, text: `${s.name} ${s.item_count} Items`, value: s.id }))
  }

  const buyerOptions = () => {
    return buyers.map(s => ({key: s.id, text: `${s.name}`, value: s.id }))
  }

  const handleSellerChange = async () => {
    try{
      setShowBuyers(!showBuyers) 
    }catch(err){
      console.log('err',err)
    }
  }

  return (
    <div>
      <h1>FindProduct</h1>
      <Select onChange={handleSellerChange} placeholder='Select Seller' options={sellerOptions()}/>
      <br/>
      {showBuyers && <Select placeholder='Select Seller' options={buyerOptions()}/>}
    </div>
  )
}

export default FindProduct