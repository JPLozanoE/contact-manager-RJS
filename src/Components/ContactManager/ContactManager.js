import React, {Component} from 'react'
import AddPersonForm from '../AddPersonForm/'
import PeopleList from '../PeopleList'

export default class ContactManager extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.data, "Estas son las props");
        this.state = {
            contacts: this.props.data
        }
    }

    // Pasamos esta funcion al componente hijo para que cambie el estado del padre props to child
    // addPerson(name) {
    //     this.setState(prevState => ({
    //         contacts: [
    //             ...prevState.contacts,
    //             name
    //         ]
    //     }));

    //     console.log(this.state);
    // }

    render() {
        return (
            <div>
                <AddPersonForm 
                // handleSubmit={
                //     this.addPerson.bind(this)
                // }

                />
                <PeopleList data={
                    this.state.contacts
                }/>
            </div>
        )
    }
}
