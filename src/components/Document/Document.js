import './Document.css'

import React from 'react'

export default class extends React.Component {
    render() {
        const {language} = this.props
        return (<div className="Document">
            <div>
            <h2>{language.Document__Title}</h2>
            <p>{language.Document__Description}</p>
            <div className="Document__UploadZone"><p><input type="file"/></p></div>
            </div>
        </div>)
    }
}