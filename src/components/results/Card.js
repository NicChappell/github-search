// dependencies
import React from 'react'
import { Link } from 'react-router-dom'


// number of stars, language, and the owners name



const Card = ({ searchResult }) => {
    return (
        <div className="col s12 l6 search-result">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{searchResult.name}</span>
                    <p>{searchResult.description}</p>
                    <ul>
                        <li><b>Owner:</b> {searchResult.owner.login}</li>
                        <li><b>Language:</b> {searchResult.language}</li>
                        <li><b>Stars:</b> {searchResult.stargazers_count.toLocaleString()}</li>
                    </ul>
                </div>
                <div className="card-action">
                    <Link className="black-text" to={`/${searchResult.full_name}`}>More Details</Link>
                    <a className="black-text" href={searchResult.html_url} target="_blank">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Card