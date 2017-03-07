import {
    mapProps,
    getContext
} from 'recompose';

import { PropTypes } from 'react';

export const getTheme = getContext({
                                       theme: PropTypes.shape({
                                                                  color: PropTypes.object,
                                                                  number: PropTypes.object,
                                                                  string: PropTypes.object
                                                              })
                                   });

export const themeStyle = mapThemeToStyle => mapProps(
    props => {
        const {theme, style} = props;

        return {
            ...props,
            style: [
                mapThemeToStyle(theme, props),
                style
            ]
        };
    }
)