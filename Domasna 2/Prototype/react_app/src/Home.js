import React from 'react'
import {Link} from "react-router-dom"


function Home(){
    return (
        <div className="Home">
            <Link to="/list">See list</Link>
            <h1> testing testing </h1>
        </div>
    )
}

export default Home