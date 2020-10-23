import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const Nombre = styled.li`
  color: #9b798b;
  font-size:32px;
  text-decoration:none;
`

const ListaNombres = styled.ul`
  list-style-type:none;
`

function PeopleList(props) {
   console.log(props);
    const arr = props.contacts;
    const ListItems = arr.map((val, index) => 
    <Nombre key={index}>{val}</Nombre>)

    return <div><ListaNombres>{ListItems}</ListaNombres></div> 
}

function mapStateToProps(state){
  return{
    contacts:state.contacts
  }
}

export default connect(mapStateToProps)(PeopleList)
