import React from 'react';
import {mapProps} from 'recompose';

const User = ({name, status}) => <div>{name} - status</div>;
const UserList = ({users, status}) =>
    <div>
        <h3>{status} User</h3>
        { users && users.map((user, i) => <User {...user} key={i} />) }
    </div>;

const filterByStatus = (status) => mapProps(
    ({users}) => ({
        status,
        users: users.filter(u => u.status === status)
    })
);

export const ActiveUsers = filterByStatus('active')(UserList);
export const InactiveUsers = filterByStatus('inactive')(UserList);
export const PendingUsers = filterByStatus('pending')(UserList);

export default UserList;

     
