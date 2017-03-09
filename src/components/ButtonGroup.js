import React, {PropTypes} from 'react';

import {
    addStyle,
    getTheme,
    themeStyle
} from './hocs';
import {
    setDisplayName,
    withContext,
    compose
} from 'recompose';
import Radium from 'radium';

const mapThemeToStyle = ({number}, porps) => ({
    padding: (number.buttonGroupSpace || 6) * 1,
    flexDirection: porps.isVertical ? 'column': 'row'
});

const ButtonGroup = ({ children, ...rest }) => (
    <div {...rest}>
        {children}
    </div>
);

const enhance = compose(
    setDisplayName('ButtonGroup'),
    getTheme,
    themeStyle(mapThemeToStyle),
    withContext(
        {buttonGroup: PropTypes.bool},
        (props) => ({buttonGroup: true})
    ),
    addStyle({
        padding: 6,
        display: 'flex'
             }),
    Radium
);

export default enhance(ButtonGroup);