import React from 'react'
import styled from 'styled-components'

const Nombre = styled.li`
  color: #9b798b;
  font-size:32px;
  text-decoration:none;
`

const ListaNombres = styled.ul`
  list-style-type:none;
  text-align:left;
`

function PeopleList(props) { // console.log(props.data);
    const arr = props.data;
    const ListItems = arr.map((val, index) => 
    <Nombre key={index}>{val}</Nombre>)

    return <div><ListaNombres>{ListItems}</ListaNombres></div> 
}

export default PeopleList
