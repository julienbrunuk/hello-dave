import './TradingTeaser.css'
import React, {Component} from 'react'
import classnames from 'classnames'

export default class TradingTeaser extends Component {
    render() {
        const {anonymous, prospect, full} = this.props
        const wrappingClassing = classnames({
                'TradingTeaser': true,
                'TradingTeaser--titles': anonymous,
                'TradingTeaser--greyscale': anonymous || prospect || full,
                'TradingTeaser--unfiltered': full
            }
        )
        return (<div className={wrappingClassing}>
        </div>)
    }
}