// dependencies
import axios from 'axios'
import isEmpty from 'lodash.isempty'
import React, {
    useEffect,
    useState
} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

// components
import Navbar from './components/layout/Navbar'

// routes
import Details from './routes/Details'
import NoMatch from './routes/NoMatch'
import Search from './routes/Search'

// utilities
import { useDebounce } from './utils'

// validation
import { validateSearch } from './validation'

// static files
import './css/styles.css'

const App = () => {
    // state hooks
    const [errors, setErrors] = useState({ isValid: false })
    const [filters, setFilters] = useState([])
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)
    const [sortMethod, setSortMethod] = useState('best-match')
    const [query, setQuery] = useState('')

    // custom hooks
    const debouncedQuery = useDebounce(query, 250)

    // effect hooks
    useEffect(() => {
        // validate debounced query
        const errors = validateSearch(debouncedQuery)

        // update state
        setErrors(errors)
        setFilters([])
        setSortMethod('best-match')
    }, [debouncedQuery])

    useEffect(() => {
        if (isEmpty(errors)) {
            axios.get(`https://api.github.com/search/repositories?q=${debouncedQuery}`)
                .then(res => setSearchResults(res.data.items))
                .catch(err => console.log(err))
        } else {
            setSearchResults([])
        }
    }, [errors])

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Search
                            errors={errors}
                            filters={filters}
                            searchResults={searchResults}
                            setFilters={setFilters}
                            setSortMethod={setSortMethod}
                            sortMethod={sortMethod}
                            setQuery={setQuery}
                            query={query}
                        />
                    )}
                />
                <Route
                    exact
                    path="/:owner/:repo"
                    render={() => <Details searchResults={searchResults} />}
                />
                <Route path="*" component={NoMatch} />
            </Switch>
        </Router>
    )
}

export default App
