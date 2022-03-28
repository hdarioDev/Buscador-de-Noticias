import React from 'react'
import '../styles/New.scss'

function New({ newProp }) {

    const { urlToImage, url, title, description, source } = newProp
    // const image = (urlToImage)? urlToImage :null
    return (
        <div className="new-article">
            {(urlToImage) ? <img src={urlToImage} alt={title}></img> : null}
            <span>{source.name}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" >Ver noticia completa</a>
        </div>
    )
}

export default New
