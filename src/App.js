import React, { Component } from 'react';
import {compose, withState} from 'recompose';
import logo from './logo.svg';
import './App.css';

import myDefaultTheme from './themes/default';
import Button from './components/Button';

class App extends Component {
    static childContextTypes = {
        theme: React.PropTypes.object
    };

    getChildContext() {
        return {theme: this.props.theme}
    }

    render() {
        const {theme, updateTheme} = this.props;
        return (
            <div className="App">
                <pre>
                    {JSON.stringify(theme, null, 2)}
                </pre>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <main className="container">
                    <section>
                        <Button style={{ 'backgroundColor': 'black' }}>Button</Button>
                    </section>
                </main>
            </div>
        );
    }
}

const enhance = compose(
    withState('theme', 'updateTheme', myDefaultTheme)
);
export default enhance(App);
