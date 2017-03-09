import React, { Component } from 'react';
import { compose, withState } from 'recompose';
import './App.css';

import myDefaultTheme from './themes/default';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';

class App extends Component {
    static childContextTypes = {
        theme: React.PropTypes.object
    };

    getChildContext() {
        return { theme: this.props.theme }
    }

    render() {
        const { theme, updateTheme } = this.props;
        return (
            <div className="App">

                <p>
                    <Button element={'a'}>Button</Button>
                </p>
                <p>
                    <ButtonGroup isVertical>
                        <Button element={'a'}>Click</Button>
                        <Button element={'a'}>Click</Button>
                    </ButtonGroup>
                </p>
                <div>
                    <label>Background color: </label>
                    <input
                        value={theme.color.keyColor}
                        type="color"
                        onChange={
                            (e) => {
                                updateTheme({
                                                ...theme,
                                                color: {
                                                    ...theme.color,
                                                    keyColor: e.target.value
                                                }
                                            })
                            }
                        }
                    />
                </div>
                <div>
                    <label>Text color: </label>
                    <input
                        value={theme.color.textLight}
                        type="color"
                        onChange={
                            (e) => {
                                updateTheme({
                                                ...theme,
                                                color: {
                                                    ...theme.color,
                                                    textLight: e.target.value
                                                }
                                            })
                            }
                        }
                    />
                </div>
                <div>
                    <label>button radius: </label>
                    <input
                        value={theme.number.buttonRadius}
                        type="number"
                        onChange={
                            (e) => {
                                updateTheme({
                                                ...theme,
                                                number: {
                                                    ...theme.number,
                                                    buttonRadius: Number(e.target.value)
                                                }
                                            })
                            }
                        }
                    />
                </div>
                <div>
                    <label>Button group space: </label>
                    <input
                        value={theme.number.buttonGroupSpace}
                        type="number"
                        onChange={
                            (e) => {
                                updateTheme({
                                                ...theme,
                                                number: {
                                                    ...theme.number,
                                                    buttonGroupSpace: Number(e.target.value)
                                                }
                                            })
                            }
                        }
                    />
                </div>
                <div>
                    <label>Font family: </label>
                    <input
                        value={theme.string.mainFontFamily}
                        type="text"
                        onChange={
                            (e) => {
                                updateTheme({
                                                ...theme,
                                                string: {
                                                    ...theme.number,
                                                    mainFontFamily: e.target.value
                                                }
                                            })
                            }
                        }
                    />
                </div>
            </div>
        );
    }
}

const enhance = compose(
    withState('theme', 'updateTheme', myDefaultTheme)
);
export default enhance(App);
