// dependencies
import React from 'react'

// static files
import homer from '../img/homer.png'

const NoMatch = () => {
    return (
        <div className="container" id="no-match">
            <div className="row">
                <div className="col s12 m6">
                    <h1>D'oh!</h1>
                    <p className="flow-text">The page you're looking for doesn't exist</p>
                </div>
                <div className="col s12 m6">
                    <img alt="D'oh!" src={homer} />
                </div>
            </div>
        </div>
    )
}

export default NoMatch