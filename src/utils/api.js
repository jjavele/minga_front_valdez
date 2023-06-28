import axios from "axios"
export const apiUrl = "http://localhost:8080/api/"
export const api = axios.create({baseUrl: apiUrl})
export const endpoints = {
    character: "categories/character_photo",
    cover: "categories/cover_photo",
    description: "categories/description"
}