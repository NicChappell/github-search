// dependencies
import React from 'react'

const Sort = (props) => {
    // props
    const {
        setSortMethod,
        sortMethod
    } = props

    const handleChange = e => setSortMethod(e.currentTarget.value)

    return (
        <form>
            <p>
                <label>
                    <input
                        checked={sortMethod === 'best-match'}
                        className="with-gap"
                        name="sort"
                        onChange={handleChange}
                        type="radio"
                        value="best-match"
                    />
                    <span>Best Match</span>
                </label>
            </p>
            <p>
                <label>
                    <input
                        checked={sortMethod === 'stars'}
                        className="with-gap"
                        name="sort"
                        onChange={handleChange}
                        type="radio"
                        value="stars"
                    />
                    <span>Stars</span>
                </label>
            </p>
        </form>
    )
}

export default Sort