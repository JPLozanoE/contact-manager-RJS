import React, { Component } from 'react'
import {AddPersonForm} from '../AddPersonForm'
import {PeopleList} from '../PeopleList'

export default class ContactManager extends Component {

    render() {
        return (
            <div>
                <AddPersonForm/>
                <PeopleList data={this.props.contacts}/>
            </div>
        )
    }
}
