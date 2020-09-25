// dependencies
import React from 'react'

const Input = (props) => {
    // props
    const {
        setQuery,
        query
    } = props

    return (
        <div className="row input">
            <div className="col s12 input-field">
                <i className="material-icons prefix">search</i>
                <input
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Enter search term (e.g. Tetris)"
                    type="text"
                    value={query}
                />
            </div>
        </div>
    )
}

export default Input