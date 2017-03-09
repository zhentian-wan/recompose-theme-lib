import React from 'react';
import {
    mapProps,
    compose,
    defaultProps,
    setDisplayName,
    componentFromProp
} from 'recompose';
import Radium from 'radium';

import {
    getTheme,
    themeStyle,
    addStyle,
    getButtonGroup
} from './hocs';

const mapThemeToStyle = ({
                            color,
                            number,
                            string
                         }, props) => {
    return {
        ...(color.keyColor &&
            {backgroundColor: color.keyColor} || {}
        ),
        ...(props.buttonGroup &&
            {margin: number.buttonGroupSpace} || {}
        ),
        color: color.textLight,
        borderRadius: number.buttonRadius,
        fontFamily: string.mainFontFamily
    };
};

const style = {
    backgroundColor: 'red',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    fontSize: 18,
    borderRadius: 3,
    fontWeight: 100,
    padding: 12,
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    display: 'flex',
    flex: 1,
    cursor: 'pointer',
    ':hover': {
        backgroundColor: 'purple'
    }
};

const enhance = compose(
    getButtonGroup,
    getTheme, // using the container's defined theme
    themeStyle(mapThemeToStyle), // apply the default theme to the component
    addStyle(style),
    setDisplayName('Button'),
    defaultProps({
        element: 'button'
                 }),
    Radium
);
export default enhance(componentFromProp('element'));


