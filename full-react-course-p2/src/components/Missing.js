import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
    return (
        <main className="Missing">
            <h2>Post not found</h2>
            <p className="noPost">Well, that's disappointing.</p>
            <p className="homeLink">
                <Link to="/">Visit our <span>Homepage</span></Link>
            </p>
        </main>
    )
}

export default Missing