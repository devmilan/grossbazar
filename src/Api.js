import axios from 'axios';

const REACT_APP_API_URL = 'https://grossbazar-api.herokuapp.com/api';


//Product API

export const addProduct = async (name, description, mrp, price, category, subcategory, onsale, featured, status) => {
    const res = await axios.post(`${REACT_APP_API_URL}/products`, {
        name,
        description,
        mrp,
        price,
        category,
        subcategory,
        onsale,
        featured,
        status
    });
    return res.data
};

export const getProducts = async () => {
    const res = await axios.get(`${REACT_APP_API_URL}/products`);
    return res.data
};

export const getProduct = async (id) => {
    const res = await axios.get(`${REACT_APP_API_URL}/products/${id}`);
    return res.data
};

export const updateProduct = async (id, data) => {
    const res = await axios.put(`${REACT_APP_API_URL}/products/${id}`, data);
    return res.data
};

export const deleteProduct = async (id) => {
    const res = await axios.delete(`${REACT_APP_API_URL}/products/${id}`);
    return res.data
};


//Autontication API

export const register = async (name, email, password, role) => {
    const res = await axios.post(`${REACT_APP_API_URL}/auth/register`, {
        name,
        email,
        password,
        role
    });
    return res.data
};

export const login = async (email, password) => {
    const res = await axios.post(`${REACT_APP_API_URL}/auth/register`, {
        email,
        password
    });
    return res.data
};

export const getMe = async () => {
    const res = await axios.get(`${REACT_APP_API_URL}/auth/me`);
    return res.data
};

export const forgotPassword = async (email) => {
    const res = await axios.post(`${REACT_APP_API_URL}/auth/forgotpassword`, {
        email
    });
    return res.data
};

export const resetPassword = async (password) => {
    const res = await axios.put(`${REACT_APP_API_URL}/auth/resetpassword`, {
        password
    });
    return res.data
};

export const updateUserInfo = async (name, email) => {
    const res = await axios.put(`${REACT_APP_API_URL}/auth/updateuserinfo`, {
        name,
        email
    });
    return res.data
};

export const updatePassword = async (currentPassword, newPassword) => {
    const res = await axios.put(`${REACT_APP_API_URL}/auth/updatepassword`, {
        currentPassword,
        newPassword
    });
    return res.data
};

export const logout = async () => {
    const res = await axios.get(`${REACT_APP_API_URL}/auth/logout`);
    return res.data
};