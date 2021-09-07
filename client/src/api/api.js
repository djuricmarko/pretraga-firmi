import axios from "axios"

const URL = "http://localhost:5000"

export const getUser = async (callback) => {
    axios({
        method: "GET",
        withCredentials: true,
        url: `${URL}/user`,
    })
        .then((res) => {
            if (res.data.users) {
                console.log(res.data.users.username, "is logged in!!")
                callback()
            } else {
                console.log("User not found.")
            }
        })
        .catch((err) => console.warn(err.message))
}

export const registerUser = async (username, password) => {
    axios({
        method: "POST",
        data: {
            username: username,
            password: password,
        },
        withCredentials: true,
        url: `${URL}/register`,
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.warn(err.message)
        })
}
export const loginUser = async (username, password, callback) => {
    axios({
        method: "POST",
        data: {
            username: username,
            password: password,
        },
        withCredentials: true,
        url: `${URL}/login`,
    })
        .then((res) => {
            if (res.data.status) {
                callback()
                console.log("Successfully authenticated.")
            } else {
                console.log("Wrong username or password.")
            }
        })
        .catch((err) => {
            console.warn(err)
        })
}

export const getDelatnosti = async () => {
    try {
        const response = await fetch(`${URL}/delatnosti`, {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json",
            },
        })
        const data = await response.json()
        if (data) {
            return data
        }
    } catch (error) {
        console.warn(error)
    }
}

export const getFirme = async () => {
    try {
        const response = await fetch(`${URL}/firme`, {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json",
            },
        })
        const data = await response.json()
        if (data) {
            return data
        }
    } catch (error) {
        console.warn(error)
    }
}
