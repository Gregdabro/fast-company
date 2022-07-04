import React from "react";
//импортируем API
import api from "../api/index";

//создаем компонент Users
const Users = () => {
    console.log('users', api.users.fetchAll())
    return <h1>Users</h1>
}

// экспортируем компонент
export default Users;

