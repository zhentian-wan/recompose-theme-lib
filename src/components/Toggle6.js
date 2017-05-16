import React from 'react';
import { lifecycle, branch, compose, renderComponent } from 'recompose';

const User = ({ name, status }) =>
    <div className="User">{ name }—{ status }</div>;

const withUserData = lifecycle({
                                   componentDidMount() {
                                       fetchData().then(
                                           (users) => this.setState({ users }),
                                           (error) => this.setState({ error })
                                       );
                                   }
                               });

const UNAUTHENTICATED = 401;
const UNAUTHORIZED = 403;
const errorMsgs = {
    [UNAUTHENTICATED]: 'Not Authenticated!',
    [UNAUTHORIZED]: 'Not Authorized!',
};

const AuthError = ({ error }) => error.statusCode && <div className="Error">{ errorMsgs[error.statusCode] }</div>;

const NoUsersMessage = () =>
    <div>There are no users to display</div>;


// Mock Service
const noUsers = [];
const users = [
    { name: "Tim", status: "active" },
    { name: "Bob", status: "active" },
    { name: "Joe", status: "inactive" },
    { name: "Jim", status: "pending" },
];
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject({ statusCode: UNAUTHENTICATED });
            // reject({ statusCode: UNAUTHORIZED })
            // resolve(noUsers);
             resolve(users);
        }, 100);
    });
}

const hasError = ({error}) => error && error.statusCode;
const hasNoUser = ({users}) => users && users.length === 0;

const enhance = compose(
    withUserData,
    branch(hasError, renderComponent(AuthError)),
    branch(hasNoUser, renderComponent(NoUsersMessage)),
);

const User6 = enhance(({users}) => (
    <div className="UserList">
        { users && users.map((user) => <User {...user} />) }
    </div>
));

export default User6;

