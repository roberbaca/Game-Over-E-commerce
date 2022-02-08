import axios from "axios";

//const baseURL = 'https://gameover-backend.herokuapp.com/api'; // production (deployada en heroku)
const baseURL = 'http://localhost:3100/api';                    // test

export const getAllUsers = () => {
    return axios.get(`${baseURL}/users`);
}

export const createUser = ({ firstName, lastName, age, email, password }) => {
    return axios.post(`${baseURL}/register`, {firstName, lastName, age, email, password});
}

export const getUserById = ({ id }) => {
    return axios.get(`${baseURL}/user/${id}`);
}