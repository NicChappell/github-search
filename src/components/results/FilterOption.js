// dependencies
import React, {
    useEffect,
    useState
} from 'react'

const FilterOption = (props) => {
    // props
    const {
        filters,
        filterOption,
        setFilters
    } = props

    // state hooks
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        checked
            ? setFilters(filters.filter(filter => filter !== filterOption))
            : setFilters([...filters, filterOption])

        // update state
        setChecked(!checked)
    }

    // effect hooks
    useEffect(() => {
        filters.includes(filterOption)
            ? setChecked(true)
            : setChecked(false)
    }, [filters])

    return (
        <p>
            <label>
                <input
                    checked={checked}
                    onChange={handleChange}
                    type="checkbox"
                />
                <span>{filterOption}</span>
            </label>
        </p>
    )
}

export default FilterOption