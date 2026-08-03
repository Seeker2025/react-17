const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'c7cfa9764acc40e0977baf4dd8dae782';

export const getNews = (searchText) =>{
   return fetch(`${BASE_URL}/everything?q=${searchText}`, {
        headers: {
            'X-Api-Key': API_KEY,
        },
    })
}