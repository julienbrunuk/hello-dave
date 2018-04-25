import './TradingTeaser.css'
import React, {Component} from 'react'
import classnames from 'classnames'
export default class TradingTeaser extends Component {
    render() {
        const {public, prospect, full} = this.props
        const wrappingClassing = classnames({
                'TradingTeaser': true,
                'TradingTeaser--titles': public,
                'TradingTeaser--greyscale': public || prospect || full,
                'TradingTeaser--unfiltered': full
            }
        )
        return (<div className={TradingTeaser}>
            <input className="TradingTeaser" type={type}/>
        </div>)
    }
}