import './InputField.css'
import React, {Component} from 'react'

export default class InputField extends Component {
    render() {
        const {type = 'text'} = this.props
        return (<div>
            <input className="InputField__input" type={type}/>
        </div>)
    }
}