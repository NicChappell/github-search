// dependencies
import isEmpty from 'lodash.isempty'
import React from 'react'

const Input = (props) => {
    // props
    const {
        errors,
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
                {!isEmpty(errors.message) ? <span className="errors">{errors.message}</span> : null}
            </div>
        </div>
    )
}

export default Input