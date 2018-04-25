import './Label.css'
import React, {Component} from 'react'

export default class Label extends Component {
    render() {
        const {onClick} = this.props
        return (<div className="button" onClick={onClick}>
            {this.props.children}
        </div>)
    }
}