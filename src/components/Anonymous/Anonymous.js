import './Anonymous.css'
import React from 'react'
import {isEmailAddress} from "../../validators";
import {TextInputField, Button} from 'evergreen-ui'

export default class extends React.Component {
    state = {
        email: '',
        touched: false, // whether the CallToAction button has been touched
        validEmail: false
    }

    submit = () => {
        if (this.state.validEmail) {
            this.props.submit(this.state.email)
        } else {
            this.setState({
                touched: true
            })
        }
    }

    displayValidationError = (state) => {
        // only display the validation message if the button was clicked to avoid annoying our users
        return !state.validEmail && state.touched
    }

    setEmailAddress = (event) => {
        this.setState({
                "email": event.target.value,
                "validEmail": isEmailAddress(event.target.value)
            }
        )
    }

    render() {
        const {language} = this.props
        return (
            <div>
                <h2>{language.Anonymous_Title}</h2>
                <p>{language.Anonymous_Description}</p>
                <TextInputField
                    value={this.state.email}
                    onChange={this.setEmailAddress}
                    label={language.Anonymous_FieldName}
                    required
                    description={language.Anonymous_FieldHelpText}
                    placeholder={language.Anonymous_FieldPlaceholder}
                />
                {this.displayValidationError(this.state) ?
                    <p className="Anonymous__errorMessage">{language.Anonymous_Error}</p> : ''}
                <Button appearance="green" className="App__CallToAction"
                        onClick={this.submit}>{language.Anonymous_CallToAction}</Button>
            </div>)
    }

}