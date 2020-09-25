// dependencies
import React from 'react'

const Card = () => {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>
                        I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.
                    </p>
                </div>
                <div className="card-action">
                    <button className="btn">More Details</button>
                    <a className="btn" href="https://github.com/NicChappell/github-search">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Card