import React, {PropTypes} from 'react';

import {
    setDisplayName,
    withContext,
    compose
} from 'recompose';
import Radium from 'radium';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.isVertical ? 'column': 'row'};
    align-items: center;
    justify-content: center;
    padding: 6px;
`;

const ButtonGroup = ({children, ...rest}) => {
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    );
};

const enhance = compose(
    setDisplayName('ButtonGroup'),
    withContext(
        {buttonGroup: PropTypes.bool},
        (props) => ({buttonGroup: true})
    ),
    Radium
);

export default enhance(ButtonGroup);