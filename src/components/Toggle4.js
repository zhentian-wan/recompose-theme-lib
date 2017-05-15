import React from 'react';
import { withProps, compose, flattenProp } from 'recompose';

// Mock Configuration
function ReactRedux() {
    const state = {
       user: {
           name: 'Joo',
           status: 'inactive'
       },
       address: {
           street: 'SF',
           postcode: '10101'
       }
    };
    return {
        connect: (map) => withProps(map(state))
    };
}

const {connect} = ReactRedux();

const UserStyle = {
    position: 'relative',
    background: 'lightblue',
    display: 'inline-block',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '50px'
};

const mapStateToProps = (state) => ({
    user: state.user,
    address: state.address
});

const enhance = compose(
    connect(mapStateToProps),
    flattenProp('user')
);

let User4 = enhance(({ name, status, address }) => (
    <div style={UserStyle}>
        {name} - {status} - {address.street} - {address.postcode}
    </div>
));


export default User4;

