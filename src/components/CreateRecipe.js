import React from 'react'

const goToHome = () => {
    window.location.href='/'
}

export const CreateRecipe = () => {

    return(
        <>
        <div>This is a creationpage!</div>
        <button onClick={goToHome}>Go back home!</button>
        </>
    )
}