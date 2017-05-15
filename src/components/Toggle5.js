import React from 'react';
import { lifecycle, branch, compose, renderComponent } from 'recompose';

// Mock Configuration
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            name: 'Zhentian',
            status: 'active'
                                 }), 1500);
    })
}

const Spinner = () =>
    <div className="Spinner">
        <div className="loader">Loading...</div>
    </div>;

const withUserData = lifecycle({
    getInitialState(){
        return {
            loading: true
        }
    },
    componentDidMount() {
        getUser()
            .then((user) => {
                this.setState({...user, loading: false})
            })
    }
                           });


const UserStyle = {
    position: 'relative',
    background: 'lightblue',
    display: 'inline-block',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '50px'
};



const withSpinnerWhileLoading = branch(
    (props) => props.loading,
    renderComponent(Spinner)
);

const enhance = compose(
    withUserData,
    withSpinnerWhileLoading
)

let User5 = enhance(({ name, status }) => (
    <div style={UserStyle}>
        {name} - {status}
    </div>
));


export default User5;

