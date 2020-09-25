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
    const [details, setDetails] = useState('')
    const [errors, setErrors] = useState(true)
    const [filters, setFilters] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [sortMethod, setSortMethod] = useState('best-match')
    const [query, setQuery] = useState('')

    // custom hooks
    const debouncedQuery = useDebounce(query, 250)

    // effect hooks
    useEffect(() => {
    }, [])

    useEffect(() => {
        // validate debounced query
        const errors = validateSearch(debouncedQuery)

        // update state
        setErrors(errors)
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

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    return (
        <Router>
            <div id="app-container">
                <Navbar />
                <div id="router-container">
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
                            path="/:repoName"
                            render={() => (
                                <Details
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
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
