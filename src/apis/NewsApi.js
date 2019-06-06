import axios from 'axios'


export const NewsApiKey='cad8ab8b70e744d189f859959f767c00';

export default axios.create({baseURL:'https://newsapi.org/v2/top-headlines'});
