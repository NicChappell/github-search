// dependencies
import React from 'react'

// static files
import noResults from '../../img/no-results.png'

const NoResults = () => {
    return (
        <div className="row center no-results">
            <div className="col s12">
                <img alt="No Results" src={noResults} />
            </div>
            <div className="col s12">
                <p className="flow-text">Empty response</p>
            </div>
        </div>
    )
}

export default NoResults