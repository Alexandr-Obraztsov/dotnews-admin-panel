import {ChannelType, TopicType} from "./App";

const server_url = "https://dotnewsbot.ru/back_api"

// channels

export const getChannels = async () => {
    const response = await fetch(`${server_url}/api/channels`);
    return response.json();
}

export const addChannel = async ({name, telegramId, isPrivate}: ChannelType) => {
    await fetch(`${server_url}/api/channels`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            telegramId,
            isPrivate
        })
    })
}


export const deleteChannel = async (id: string) => {
    await fetch(`${server_url}/api/channels/${id}`,{
        method: 'DELETE'
    })
}

export const registerUser = async (userId: number) => {
    console.log(`Send request for register user ${userId}`);
    return fetch(`${server_url}/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            telegramId: userId
        })
    }).then(res => res.json())
}

export const checkUser = async (userId: number) => {
    console.log(`Send request for check user ${userId}`);
    return fetch(`${server_url}/api/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

export const deleteUser = async (id: string) => {
    await fetch(`${server_url}/api/users/${id}`,{
        method: 'DELETE'
    })
}

export const getUsers = async () => {
    return fetch(`${server_url}/api/users`, { method: 'GET', headers: { 'Content-Type': 'application/json' } }).then(res => res.json())
}

export const subscribeToTopics = async (userTelegramId: string, topicIds: string[]) => {
    console.log("Send request for subscribe to topics");
    return fetch(`${server_url}/api/subscribtions/subscribe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userTelegramId, topicIds })
    })
}

export const unsubscribeFromTopics = async (userTelegramId: string, topicIds: string[]) => {
    console.log("Send request for unsubscribe from topics");
    return fetch(`${server_url}/api/subscribtions/unsubscribe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userTelegramId, topicIds })
    })
}

export const getUserTopics = async (userId: string) => {
    console.log("Send request for get user topics");
    return fetch(`${server_url}/api/topics?userId=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

export const getTopics = async () => {
    return fetch(`${server_url}/api/topics`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

export const deleteTopic = async (id: string) => {
    await fetch(`${server_url}/api/topics/${id}`,{
        method: 'DELETE'
    })
}

export const addTopic = async ({name}: TopicType) => {
    await fetch(`${server_url}/api/topics`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name
        })
    })
}
