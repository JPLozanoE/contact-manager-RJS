import React, {Component} from 'react'
import styled from 'styled-components'
import {addPerson} from '../../actions/actions'
import {connect} from 'react-redux'

const Button = styled.button`
  background: #ED97C7;
  border-radius: 0px 20px 20px 0px;
  border: 1px solid transparent;
  color: #934d68;
  ${'' /* margin: 0 1em; */}
  padding: 0.25em 1em;
  font-size: 24px;
  cursor:pointer;
`

const Input = styled.input`
    font-size: 24px;
  border-radius: 20px 0px 0px 20px;
  border: 1px solid transparent;
  color: black;
  ${'' /* margin: 0 1em; */}
  padding: 0.25em 1em;
`

const Form = styled.form`
margin-top:32px;
`

class AddPersonForm extends Component {

    state = {
        person: ""
    }

    render() {
        return (
            <Form onSubmit={
                this.handleSubmit
            }>
                <Input onChange={
                        this.handleChange
                    }
                    type="text"
                    placeholder="Agregar un nuevo contacto"
                    value={
                        this.state.person
                    }/>
                <Button type="submit">Agregar</Button>
            </Form>
        )
    }

    handleChange = (e) => {
        this.setState({person: e.target.value});
    }

    handleSubmit = (e) => {
        console.log(this.props.addPerson)
        if(this.state.person!==''){
            this.props.addPerson(this.state.person);
        this.setState({person: ''});
        }

        e.preventDefault();
        // PROPS TO CHILD
        // this.props.handleSubmit(this.state.person);
        // this.setState({person: ''});
    }
}

const mapDispatchToProps = {
    addPerson
}

export default connect(null,mapDispatchToProps)(AddPersonForm) 
