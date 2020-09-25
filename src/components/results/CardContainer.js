// dependencies
import React, {
    useEffect,
    useState
} from 'react'

// components
import Filters from './Filters'
import Sort from './Sort'
import Card from './Card'

const CardContainer = (props) => {
    // props
    const {
        filters,
        searchResults,
        setFilters,
        setSortMethod,
        sortMethod
    } = props

    // state hooks
    const [filterOptions, setFilterOptions] = useState([])
    const [mutatedSearchResults, setMutatedSearchResults] = useState([])

    // effect hooks
    useEffect(() => {
        // make a copy of search results array
        const searchResultsCopy = searchResults.map(searchResult => searchResult)

        // sort temp array
        if (sortMethod === 'stars') {
            searchResultsCopy.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1)
        }

        // filter temp array
        let filteredSearchResults = []
        if (filters.length > 0) {
            filteredSearchResults = searchResultsCopy.filter(searchResult => filters.includes(searchResult.language))
        } else {
            filteredSearchResults = searchResultsCopy
        }

        // update state
        setMutatedSearchResults(filteredSearchResults)
    }, [filters, sortMethod])

    useEffect(() => {
        // isolate language from search results array
        const languages = searchResults.map(searchResult => searchResult.language)

        // update state
        setFilterOptions([...new Set(languages)])
        setMutatedSearchResults(searchResults)
    }, [searchResults])

    return (
        <div className="row card-container">
            <div className="col s12 m3">
                <div className="row">
                    <div className="col s12 sort">
                        <h6>Sort by:</h6>
                        <Sort
                            setSortMethod={setSortMethod}
                            sortMethod={sortMethod}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 filters">
                        <h6>Filter by:</h6>
                        <Filters
                            filters={filters}
                            filterOptions={filterOptions}
                            setFilters={setFilters}
                        />
                    </div>
                </div>
            </div>
            <div className="col s12 m9">
                <div className="row">
                    {mutatedSearchResults.map(searchResult => (
                        <Card
                            key={searchResult.id}
                            searchResult={searchResult}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardContainer