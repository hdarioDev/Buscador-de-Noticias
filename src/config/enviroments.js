import axios from 'axios'
const APIS = 'https://newsapi.org/v2/'
const API_KEY = 'c709dc5a789b43ac88201c465c34043a'

const queryAPI = async (category) => {
    const API = `${APIS}top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    console.log("API ", API)
    const response = await axios(API)
    console.log("response ", response.data)
    const news = response.data // await response.json()
    console.log("news ", news.articles)
    // setNews(news.articles)
    return news.articles
}
export default queryAPI 