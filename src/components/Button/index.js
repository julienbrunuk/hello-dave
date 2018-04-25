import './Button.css'
import React, {Component} from 'react'

export default class Button extends Component {
    render() {
        const {onClick} = this.props
        return (<div className="button" onClick={onClick}>
            {this.props.children}
        </div>)
    }
}