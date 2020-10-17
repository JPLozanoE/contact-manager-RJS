import React from 'react'

function PeopleList(props){
    const arr = props.data;
    const ListItems = arr.map((val,index)=>
        <li key={index}>{val}</li>
    )
    return <ul>{ListItems}</ul>
}

export default PeopleList