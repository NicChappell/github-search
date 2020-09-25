// dependencies
import React from 'react'

// components
import CardContainer from '../components/results/CardContainer'
import Input from '../components/search/Input'

const Home = () => {
    return (
        <div className="container" id="home">
            <Input />
            <CardContainer />
        </div>
    )
}

export default Home