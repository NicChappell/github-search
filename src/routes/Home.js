// dependencies
import React from 'react'

// components
import CardContainer from '../components/results/CardContainer'
import NoResults from '../components/results/NoResults'
import Input from '../components/search/Input'

const Home = (props) => {
    // props
    const {
        filters,
        searchResults,
        setFilters,
        setSortMethod,
        sortMethod,
        setQuery,
        query
    } = props

    const renderContent = () => {
        if (searchResults.length > 0) {
            return (<CardContainer
                filters={filters}
                searchResults={searchResults}
                setFilters={setFilters}
                setSortMethod={setSortMethod}
                sortMethod={sortMethod}
            />)
        } else {
            return <NoResults />
        }
    }

    return (
        <div className="container" id="home">
            <Input
                setQuery={setQuery}
                query={query}
            />
            {renderContent()}
        </div>
    )
}

export default Home