import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Select } from 'semantic-ui-react'
import FindProductItems from '../components/FindProductItems'

const FindProduct = () => {
  const [sellers, setSellers] = useState([])
  const [buyers, setBuyers] = useState([])
  const [showBuyers, setShowBuyers] = useState(false)
  const [items, setItems] = useState([])
  const [showTable, setShowTable] = useState(false)

  useEffect(()=>{
    axiosCalls()
  },[])

  const axiosCalls = async () => {
    try{
      let res = await axios.get(`/api/sellers`)
      setSellers(res.data)
    }catch(err){
      console.log('err',err)
      console.log('err.response',err.response)
    }
  }

  const sellerOptions = () => {
    return sellers.map(s => ({key: s.id, text: `${s.name} ${s.item_count} Buyers`, value: s.id }))
  }

  const buyerOptions = () => {
    return buyers.map(s => ({key: s.id, text: `${s.name}`, value: s.id }))
  }

  const handleSellerChange = async (e, {value}) => {
    try{
      let res1 = await axios.get(`/api/sellers_buyers/${value}`)
      setBuyers(res1.data)
      setShowBuyers(true)
      setShowTable(false)

    }catch(err){
      console.log('err',err)
    }
  }

  const handleBuyerChange = async (e, {value}) => {
    try{
      let res2 = await axios.get(`/api/buyers/${value}`)
      setItems(res2.data)
      setShowTable(true)
    }catch(err){
      console.log('buyer change err',err)
    }
  }

  return (
    <div>
      <Select style={{marginBottom: '10px'}}onChange={handleSellerChange} placeholder='Select Seller' options={sellerOptions()}/>
      <br/>
      {showBuyers && <Select onChange={handleBuyerChange} placeholder='Select Seller' options={buyerOptions()}/>}
      {showTable && <FindProductItems items={items}/>}
    </div>
  )
}

export default FindProduct