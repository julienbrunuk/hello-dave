import React, {Component} from 'react';
import Grid from 'react-css-grid'
import language from './lang/en.json'
import Anonymous from './components/Anonymous'
import Prospect from './components/Prospect'
import Document from './components/Document'
import TradingTeaser from './components/TradingTeaser'

export const ACCOUNT_ANONYMOUS = 'anonymous'
export const ACCOUNT_PROSPECT = 'prospect'
export const ACCOUNT_FULL = 'full'

class App extends Component {
    state = {
        account: ACCOUNT_ANONYMOUS, // Either "anonymous", "prospect" or "full"
    }

    accountUpgrade = () => {
        const newAccountState = (this.state.account === ACCOUNT_ANONYMOUS) ? ACCOUNT_PROSPECT : ACCOUNT_FULL
        this.setState({account: newAccountState})
    }

    render() {
        return (
            <div className="App">
                <Grid
                    align="center"
                    gap={24}
                    width={375}
                    className="App__Grid"
                >
                    <div className="App__Content">
                        {(this.state.account === ACCOUNT_ANONYMOUS || this.state.account === ACCOUNT_PROSPECT) ?
                            <TradingTeaser status={this.state.account}></TradingTeaser> : ''}

                        {(this.state.account === ACCOUNT_ANONYMOUS) ?
                            <Anonymous language={language} submit={this.accountUpgrade}/> : ''}

                        {(this.state.account === ACCOUNT_PROSPECT) ?
                            <Prospect language={language} submit={this.accountUpgrade}/> : ''}

                        {(this.state.account === ACCOUNT_FULL) ? <Document language={language}/> : ''}
                    </div>
                </Grid>
            </div>
        );
    }
}

export default App;
