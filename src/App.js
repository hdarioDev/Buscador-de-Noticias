import React, { useState, useEffect } from 'react'
import './styles/global.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListNews from './components/ListNews'


function App() {
    const [category, saveCategory] = useState('')
    const [news, setNews] = useState([])

    useEffect(() => {

        const queryAPI = async () => {
            const API = `https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=c709dc5a789b43ac88201c465c34043a`
            const response = await fetch(API)
            const news = await response.json()
            console.log("news ", news.articles)
            setNews(news.articles)

        }
        queryAPI()

        // return () => {
        //     cleanup
        // }
    }, [category])
    return (
        <div>
            <Header title="NEW SEARCH ENGINE"></Header>
            <div className="main--container">
                <Formulario
                    saveCategory={saveCategory}
                ></Formulario>

                <ListNews news={news}></ListNews>
            </div>
        </div>
    )
}

export default App
