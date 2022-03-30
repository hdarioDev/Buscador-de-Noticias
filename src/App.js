import React, { useState, useEffect } from 'react'
import { SpinnerCircular, SpinnerRound } from 'spinners-react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListNews from './components/ListNews'
import queryAPI from './config/enviroments'
import './styles/global.css'

function App() {
    const [category, saveCategory] = useState('')
    const [news, setNews] = useState([])

    useEffect(async () => {

        setNews(await queryAPI(category))

    }, [category])

    return (
        <div>
            <Header title="NEW SEARCH ENGINE"></Header>
            <div className="main--container">
                <Formulario
                    saveCategory={saveCategory}
                />
                {news.length == 0 ? <SpinnerRound className="loader" enabled={true} /> : <ListNews news={news}></ListNews>}

            </div>
        </div>
    )
}

export default App
