import axios from "axios"

const URL = process.env.REACT_APP_API

const getAll = async () => {
    return await axios.get(`${URL}/products`).then( res => res.data )
}

const getById = async (id) => {
    return await axios.get(`${URL}/products/${id}`).then( res => res.data )
}

export {getAll, getById}