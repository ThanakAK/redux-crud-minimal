/**
 * Created by thanak on 12/11/16.
 */
import React from 'react'
import {Nav ,NavItem ,Glyphicon} from 'react-bootstrap'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'

class Menu extends React.Component{
    render(){
      return(
        <Nav bsStyle="pills">
            <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
          <LinkContainer to="/user-edit">
              <NavItem>
                  Edit User<Glyphicon glyph="plus-sign"/>
              </NavItem>
          </LinkContainer>

          </Nav>
      )
    }
}

export default Menu
