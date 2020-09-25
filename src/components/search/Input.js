// dependencies
import React, {
    useEffect,
    useState
} from 'react'

// utilities
import { useDebounce } from '../../utils'

const Input = () => {
    // state hooks
    const [query, setQuery] = useState('')

    // custom hooks
    const debouncedQuery = useDebounce(query, 333)

    // effect hooks
    useEffect(() => {
        console.log(debouncedQuery)
    }, [debouncedQuery])

    return (
        <div className="row" id="input">
            <div className="col s12 input-field">
                <i className="material-icons prefix">search</i>
                <input
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Tetris"
                    type="text"
                />
            </div>
        </div>
    )
}

export default Input