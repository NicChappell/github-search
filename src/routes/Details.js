// dependencies
import isEmpty from 'lodash.isempty'
import moment from 'moment'
import React, {
    useEffect,
    useState
} from 'react'
import { useParams } from 'react-router-dom'

const Details = ({ searchResults }) => {
    // router hooks
    const {
        owner,
        repo
    } = useParams()

    // state hooks
    const [details, setDetails] = useState({})

    // effect hooks
    useEffect(() => setDetails(searchResults.find(searchResult => searchResult.full_name === `${owner}/${repo}`)), [])

    if (!isEmpty(details)) {
        return (
            <div className="container" id="details">
                <div className="row">
                    <div className="col s12 m10 push-m1 l8 push-l2">
                        <h3 className="center">Repo Details</h3>
                        <table className="centered highlight">
                            <tbody>
                                <tr>
                                    <td>Owner</td>
                                    <td><span>{details.owner.login}</span></td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td><span>{details.name}</span></td>
                                </tr>
                                <tr>
                                    <td>Primary Language</td>
                                    <td><span>{details.language}</span></td>
                                </tr>
                                <tr>
                                    <td>Homepage</td>
                                    <td><a href={details.homepage} target="_blank">{details.homepage}</a></td>
                                </tr>
                                <tr>
                                    <td>HTML URL</td>
                                    <td><a href={details.html_url} target="_blank">{details.html_url}</a></td>
                                </tr>
                                <tr>
                                    <td>API URL</td>
                                    <td><a href={details.url} target="_blank">{details.url}</a></td>
                                </tr>
                                <tr>
                                    <td>Clone URL</td>
                                    <td><span>{details.clone_url}</span></td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td><span>{details.description}</span></td>
                                </tr>
                                <tr>
                                    <td>Created At</td>
                                    <td><span>{moment(details.created_at).format('YYYY-MM-DD')}</span></td>
                                </tr>
                                <tr>
                                    <td>Last Updated</td>
                                    <td><span>{moment(details.updated_at).format('YYYY-MM-DD')}</span></td>
                                </tr>
                                <tr>
                                    <td>Stargazers</td>
                                    <td><span>{details.stargazers_count.toLocaleString()}</span></td>
                                </tr>
                                <tr>
                                    <td>Watchers</td>
                                    <td><span>{details.watchers_count.toLocaleString()}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export default Details