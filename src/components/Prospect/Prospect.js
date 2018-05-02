import './Prospect.css'
import React from 'react'
import {isEmailAddress} from "../../validators";
import {TextInputField, Button, RadioGroup} from 'evergreen-ui'

export default class extends React.Component {
    state = {
        name: '',
        american: false,
        touched: false, // whether the CallToAction button has been touched
    }

    submit = () => {
        if (this.state.name) {
            this.props.submit(this.state.name)
        } else {
            this.setState({
                touched: true
            })
        }
    }

    displayValidationError = (state) => {
        // only display the validation message if the button was clicked to avoid annoying our users
        return !state.validName && state.touched
    }

    setName = (event) => {
        this.setState({
                "name": event.target.value,
                "validName": isEmailAddress(event.target.value)
            }
        )
    }

    render() {
        const {language} = this.props
        const americanOptions = [
                { label: language.Yes, value: true},
                { label: language.No, value: false }
            ]
        return (
            <div>
                <h2>{language.Prospect_Title}</h2>
                <p>{language.Prospect_Description}</p>
                <TextInputField
                    value={this.state.name}
                    onChange={this.setName}
                    label={language.Prospect__FullName}
                    required
                    description={language.Prospect__FullName__help}
                    placeholder={language.Prospect__FullName__placeholder}
                />
                <RadioGroup
                    label={language.Prospect__USW9}
                    value={this.state.american}
                    options={americanOptions}
                />
                <p className="Prospect__AmericanHelpText">{language.Prospect__HelpText}</p>
                {this.displayValidationError(this.state) ?
                    <p className="Prospect__errorMessage">{language.Prospect_Error}</p> : ''}
                    <Button appearance="green" className="App__CallToAction"
                        onClick={this.submit}>{language.Prospect_CallToAction}</Button>
            </div>)
    }

}