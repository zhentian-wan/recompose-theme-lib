import React, { Component } from 'react';
import { compose, withState, withContext } from 'recompose';
import './App.css';

import myDefaultTheme from './themes/default';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import User from './components/Toggle';
import User3 from './components/Toggle3';
import User4 from './components/Toggle4';
import User5 from './components/Toggle5';
import User6 from './components/Toggle6';
import User2 from './components/Toggle2';
import {ActiveUsers, InactiveUsers, PendingUsers} from './components/UserList';

import styled from 'styled-components';

// Overwrite a third part lib
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  font-size: 2em;
  background-color: white;
`;

const style = {
    color: 'tomato',
    borderColor: 'tomato',
    fontSize: 20,
    backgroundColor: 'white'
};

const users = [
    { name: "Tim", status: 'active' },
    { name: "Bob", status: 'active' },
    { name: "Joe", status: 'pending' },
    { name: "Jim", status: 'inactive' },
];

class App extends Component {

    render() {
        const { theme, updateTheme } = this.props;
        return (
            <div className="App">

                <section>
                    <User6/>
                </section>
                <p>
                    <TomatoButton element={'button'} style={style}>Button</TomatoButton>
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
    withState('theme', 'updateTheme', myDefaultTheme),
    withContext(
        {theme: React.PropTypes.object},
        (props) => ({theme: props.theme})
    )
);
export default enhance(App);
