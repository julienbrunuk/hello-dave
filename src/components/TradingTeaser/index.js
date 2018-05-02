import './TradingTeaser.css'
import React, {Component} from 'react'
import classnames from 'classnames'
import {ACCOUNT_ANONYMOUS} from '../../App'

export default class TradingTeaser extends Component {
    render() {
        const {status} = this.props
        const anonymous = (status === ACCOUNT_ANONYMOUS)
        const wrappingClassing = classnames({
                'TradingTeaser': true,
                'TradingTeaser--titles': anonymous,
                'TradingTeaser--greyscale': anonymous,
            }
        )
        return (<div className={wrappingClassing}>
        </div>)
    }
}