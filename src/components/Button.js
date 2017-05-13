import React from 'react';
import {
    compose,
    defaultProps,
    setDisplayName,
} from 'recompose';
import Radium from 'radium';
import styled from 'styled-components';
import {
    getTheme,
    themeStyle,
    getButtonGroup
} from './hocs';

/* Init Button style with theme value */
const Button = styled.button`
  background: ${props => props.theme.color.keyColor};
  color: ${props => props.theme.color.textLight};
  font-size: ${props => props.theme.number.fontSize}em;
  border-radius: ${props => props.theme.number.buttonRadius}px;
  border: ${props => props.theme.string.border};
  margin: ${props => props.buttonGroup && props.theme.number.buttonGroupSpace}px
`;

/* To make theme changeable by input values*/
const mapThemeToStyle = ({
                            color,
                            number,
                            string
                         }, props) => {
    return {
        ...(color.keyColor &&
            {backgroundColor: color.keyColor} || {}
        ),
        color: color.textLight,
        borderRadius: number.buttonRadius,
        fontFamily: string.mainFontFamily
    };
};

const enhance = compose(
    getButtonGroup,
    getTheme, // using the container's defined theme
    themeStyle(mapThemeToStyle), // apply the default theme to the component
    setDisplayName('Button'),
    defaultProps({
        element: 'button'
                 }),
    Radium
);
export default enhance(Button);


