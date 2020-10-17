import React, { Component } from 'react'

export default class AddPersonForm extends Component {
    
    state={persona:""}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" placeholder="Agregar un nuevo contacto" value={this.state.person}/>
                <button type="submit">Agregar</button>
            </form>
        )
    }

    handleChange=(e)=>{this.setState({persona:e.target.value});}
    handleSubmit=(e)=>{e.preventDefault();}
}
