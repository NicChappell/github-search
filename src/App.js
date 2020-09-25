// dependencies
import React, {
    useEffect,
    useState
} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'

// components
import Navbar from './components/layout/Navbar'

// routes
import Details from './routes/Details'
import Home from './routes/Home'
import NoMatch from './routes/NoMatch'

// utilities
import { useDebounce } from './utils'

// static files
import './css/styles.css'

const App = () => {
    // state hooks
    const [repo, setRepo] = useState('')
    const [filters, setFilters] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [sortMethod, setSortMethod] = useState('best-match')
    const [query, setQuery] = useState('')

    // custom hooks
    const debouncedQuery = useDebounce(query, 333)

    // effect hooks
    useEffect(() => {
    }, [])

    useEffect(() => {
        if (debouncedQuery.length > 5) {
            axios.get(`https://api.github.com/search/repositories?q=${debouncedQuery}`)
                .then(res => setSearchResults(res.data.items))
                .catch(err => console.log(err))
        } else {
            setSearchResults([])
        }
    }, [debouncedQuery])

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
                                <Home
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
                        <Route exact path="/:repoName" component={Details} />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
