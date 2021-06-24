import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

// import styled from 'styled-components'
// import { BORDER_RADIUS, FONT_SIZES, NAV_BACKGROUND, TEXT_COLOR, WHITE_BACKGROUND } from '../styles/styles'

const NavBar = () => {
  //used to set which link is active
  const {pathname} = useLocation()
  //used to send to another link

  // authenticated used to see if user is logged in or not.
  // handleLogout logs user out



  //this is what is being returned by the NavBar function. if you want it to show up it needs to pass
  //through here eventually.
  return(
    <>
      <Menu pointing secondary>
        <Link to='/'><Menu.Item active={pathname=== '/'}>Home</Menu.Item></Link>
        <Link to='/products'><Menu.Item active={pathname=== '/products'}>Products</Menu.Item></Link>
        <Link to='/category'><Menu.Item active={pathname=== '/category'}>Category</Menu.Item></Link>
        <Link to='/findProduct'><Menu.Item active={pathname=== '/findProduct'}>Find Product</Menu.Item></Link>
      </Menu>
    </>
  )
}

//TODO: delete if not in use.
// Custom NavBar styling
// <NavContainer >
//   <NavLink to='/'>Home</NavLink>
//   <NavLink to='/examples'>Examples</NavLink>
//   <NavLink to='/about'>About</NavLink>
//   <NavLink to='/tests'>Tests</NavLink>
// </NavContainer>

// const NavContainer = styled.div`
//   font-size: ${FONT_SIZES.MEDIUM};
//   display: flex;
//   flex-direction: row;
//   justify-Content: flex-start;
//   background-color: ${NAV_BACKGROUND};
//   border-bottom: 1px solid ${NAV_BACKGROUND};
//   border-bottom-left-radius: ${BORDER_RADIUS};
//   border-bottom-right-radius: ${BORDER_RADIUS};
// `
// const NavLink = styled(Link)`
//   padding: 8px 10px 8px 10px;
//   text-decoration: none;
//   color: ${TEXT_COLOR};
//   background-color: ${WHITE_BACKGROUND};
//   margin: 2px 1px 2px 2px;
//   border: 0px;
//   border-radius: ${BORDER_RADIUS};

//   &:hover {
//     text-decoration: underline;
//   }
// `

export default NavBar