import React from 'react';
import {
    compose,
    defaultProps,
    setDisplayName,
} from 'recompose';
import Radium from 'radium';

import {
    getButtonGroup
} from './hocs';

import styled from 'styled-components';

const Button = styled.button`
  background: ${prop => prop.theme.color.keyColor};
  color: ${prop => prop.theme.color.textLight};
  font-size: ${prop => prop.theme.number.fontSize}em;
  border-radius: ${prop => prop.theme.number.buttonRadius}px;
  border: ${prop => prop.theme.string.border};
  margin: ${prop => prop.buttonGroup ? prop.theme.number.buttonGroupSpace: 2}px
`;

const enhance = compose(
    getButtonGroup,
    setDisplayName('Button'),
    defaultProps({
        element: 'button'
                 }),
    Radium
);
export default enhance(Button);


