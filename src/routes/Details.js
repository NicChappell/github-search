// dependencies
import React from 'react'

const Details = () => {
    return (
        <div className="container" id="details">
            <div className="row">
                <div className="col s12 m10 push-m1 l8 push-l2">
                    <table className="centered highlight">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Item Name</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Alvin</td>
                                <td>Eclair</td>
                            </tr>
                            <tr>
                                <td>Alan</td>
                                <td>Jellybean</td>
                            </tr>
                            <tr>
                                <td>Jonathan</td>
                                <td>Lollipop</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Details