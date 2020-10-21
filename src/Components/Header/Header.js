import React from 'react';
import styled from 'styled-components'

const Headerdiv = styled.header`
  font-family: 'Lato', sans-serif;
  background-color: #ed97c7;
  ${'' /* border-radius: 3px; */}
  padding-top:5px;
  padding-bottom:10px;
  ${'' /* border: 2px solid #523874; */}
  color: #934d68;
  width:100%;
`

function Header () {
    return (
        <Headerdiv>
            <h1>CONTACT MANAGER</h1>
        </Headerdiv>
    )
  }

  export default Header