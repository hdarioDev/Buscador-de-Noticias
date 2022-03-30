import React from 'react'
import New from './New'
import '../styles/ListNews.scss'

function ListNews({ news }) {

    return (
        <div className="list--container">
            {news.map(value => (<New newProp={value} key={value.title} />))}

        </div>
    )
}

export default ListNews
