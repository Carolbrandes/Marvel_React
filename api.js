import axios from "axios"
const baseUrl = "http://gateway.marvel.com/v1/public"
const ts = "1629977884370"
const apiKey="f079247aa2f48d86dac4480415538eeb"
const hash="82bcf177d4ca9d8c3ec2b9c9db2276ea"


export const GET_CHARACTERS = async () => {
    const response = await axios.get(`${baseUrl}/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`)
    return response.data.data
}

export const GET_CHARACTERS_OFFSET = async (offset) => {
   
    const response = await axios.get(`${baseUrl}/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&offset=${offset}`)
    return response.data.data
}