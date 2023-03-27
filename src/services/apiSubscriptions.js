import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getMemberships(token) {
    const promise = axios.get(`${BASE_URL}/memberships`, createConfig(token))
    return promise
}

function getMempershipChoosen(token, id) {
    const promise = axios.get(`${BASE_URL}/memberships/${id}`, createConfig(token))
    return promise
}

function signSubscription(body, token) {
    const promise = axios.post(`${BASE_URL}`, body, createConfig(token))
    return promise
}

function cancelSubscription(token) {
    const promise = axios.delete(`${BASE_URL}`, createConfig(token))
    return promise
}

const apiSubscriptions = {getMemberships, getMempershipChoosen, signSubscription, cancelSubscription};

export default apiSubscriptions;