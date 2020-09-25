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

// static files
import './css/styles.css'

const App = () => {
    // state hooks
    const [repo, setRepo] = useState('')
    const [searchResults, setSearchResults] = useState([])

    // effect hooks
    useEffect(() => {
        axios.get('https://api.github.com/search/repositories?q=tetris')
            .then(res => setSearchResults(res.data.items))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    return (
        <Router>
            <div id="app-container">
                <Navbar />
                <div id="router-container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:repoName" component={Details} />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
