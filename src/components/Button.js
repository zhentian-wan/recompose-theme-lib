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
    themeStyle
} from './hocs';

const mapThemeToStyle = ({
                            color,
                            number,
                            string
                         }) => ({
    ...(color.keyColor && {backgroundColor: color.keyColor} || {}),
    color: color.textLight,
    borderRadius: number.buttonRadius,
    fontFamily: string.mainFontFamily
});

const style = {
    backgroundColor: 'grey',
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
    getTheme, // using the container's defined theme
    themeStyle(mapThemeToStyle), // apply the default theme to the component
    mapProps(props => ({
        ...props,
        style: [
            style,
            props.style,
        ]
    })),
    setDisplayName('Button'),
    defaultProps({
        element: 'button'
                 }),
    Radium
);
export default enhance(componentFromProp('element'));


