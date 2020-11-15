import React from 'react'

const goToHome = () => {
    window.location.href='/'
}

export const DetailPage = () => {

    return(
        <>
        <div>This is a detailed page about recipe</div>
        <button onClick={goToHome}>Go back to Home</button>
        </>
    )
}