export const validateSearch = (searchTerm) => {
    // error object
    let errors = {}

    // validate minimum length
    if (searchTerm.length >= 1 && searchTerm.length <= 4) {
        errors = {
            isValid: false,
            message: 'search term must have more than 4 characters'
        }
    }
    // validate characters
    if (searchTerm.length >= 1 && !searchTerm.match(/^[a-zA-Z0-9-_]+$/)) {
        errors = {
            isValid: false,
            message: 'only alpha-numeric, \'-\' and \'_\' characters are allowed'
        }
    }
    // validate maximum length
    if (searchTerm.length > 32) {
        errors = {
            isValid: false,
            message: 'search term must have fewer than 32 characters'
        }
    }

    // return errors
    return errors
}
