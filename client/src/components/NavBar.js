import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  //used to set which link is active
  const {pathname} = useLocation()
  return(
    <>
      <Menu pointing secondary>
        <Link to='/'><Menu.Item active={pathname=== '/'}>Products</Menu.Item></Link>
        <Link to='/category'><Menu.Item active={pathname=== '/category'}>Category</Menu.Item></Link>
        <Link to='/findProduct'><Menu.Item active={pathname=== '/findProduct'}>Find Product</Menu.Item></Link>
        <Link to='/AvgPrice'><Menu.Item active={pathname=== '/AvgPrice'}>Avg Price</Menu.Item></Link>
        <Link to='/categoryPrice'><Menu.Item active={pathname=== '/categoryPrice'}>Category Total</Menu.Item></Link>
      </Menu>
    </>
  )
}

export default NavBar