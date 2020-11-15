import React from 'react'

import '../styles/home.css'

const goToCreate = () => {
    window.location.href='/create'
}

export const Home = () => {

    return(
        <section className='home__wrapper'>
            <h1>This is the first page and section</h1>
            <p>Let's fill this with recipes</p>
            <button onClick={goToCreate}>Create a Recipe</button>
        </section>
    )
}