// dependencies
import React from 'react'

// components
import FilterOption from './FilterOption'

const Filters = (props) => {
    // props
    const {
        filters,
        filterOptions,
        setFilters
    } = props

    return (
        <form>
            {filterOptions.map(filterOption => (
                <FilterOption
                    filters={filters}
                    filterOption={filterOption}
                    key={filterOption}
                    setFilters={setFilters}
                />
            ))}
        </form>
    )
}

export default Filters