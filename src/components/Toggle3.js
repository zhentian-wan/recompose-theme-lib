import React from 'react';
import { withReducer, withHandlers, compose, lifecycle } from 'recompose';

// Mock Configuration
function fetchConfiguration() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
                                     showStatus: true,
                                     canDeleteUsers: true
                                 }), 300);
    });
}
const withConfig = lifecycle({
                                 getInitialState(){
                                     return { config: {} };
                                 },
                                 componentDidMount() {
                                     fetchConfiguration()
                                         .then((config) => {
                                             this.setState({ config })
                                         })
                                 }
                             })

const UserStyle = {
    position: 'relative',
    background: 'lightblue',
    display: 'inline-block',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '50px'
};

const StatusListStyle = {
    background: '#eee',
    padding: '5px',
    margin: '5px 0'
};

const TooltipStyle = {
    fontSize: '10px',
    position: 'absolute',
    top: '-10px',
    width: '80px',
    background: '#666',
    color: 'white',
    textAlign: 'center'
};

const StatusList = () =>
    <div style={StatusListStyle}>
        <div>pending</div>
        <div>inactive</div>
        <div>active</div>
    </div>;

const withToggle = compose(
    withReducer('toggleState', 'dispatch', (state = false, action) => {
        switch( action.type ) {
            case 'SHOW':
                return true;
            case 'HIDE':
                return false;
            case 'TOGGLE':
                return !state;
            default:
                return state;
        }
    }, false),
    withHandlers({
                     toggle: ({ dispatch }) => (e) => dispatch({ type: 'TOGGLE' }),
                     show: ({ dispatch }) => (e) => dispatch({ type: 'SHOW' }),
                     hide: ({ dispatch }) => (e) => dispatch({ type: 'HIDE' })
                 })
);

const Statue = withToggle(
    ({ status, toggle, toggleState }) =>
        (<span onClick={() => toggle(!toggleState)}>
            {status}
            {toggleState && <StatusList/>}
        </span>)
);

const Tooltip = withToggle(({ show, hide, toggleState, text, children }) => (
    <span>
        <span>
            {toggleState && <div
                style={TooltipStyle}>
                { text }
            </div>}
            <span
                onMouseOver={show}
                onMouseOut={hide}
            >
                { children }
            </span>
        </span>
    </span>
));

const User3 = withConfig(({ status, name, config }) => (
    <div style={UserStyle}>
        <Tooltip text="Cool Dude!">{name}</Tooltip>-
        {config.showStatus && <Statue status={status}/>}
        {config.canDeleteUsers && <button>X</button>  }
    </div>
));

export default User3;

