import React from 'react'

import '../styles/recipe.css'

const recipeArray = [
    {
        title: 'Food 1',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 2',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 3',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 4',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 5',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 6',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 7',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 8',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 9',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
    {
        title: 'Food 10',
        ingredients: 'Food item 1, food item 2',
        image: '../Assets/food.jpg',
        instructions: 'Do like this:'
    },
]

export const Recipes = () => {
    return (
        <section className={'recipe__wrapper'}>
            {recipeArray.map((recipe) => {
                return (
                    <article className={'recipe__card'}>
                        <div className={'recipe__overlay-container'}>
                            <img className={'recipe__img'} src={recipe.image} alt={recipe.title} />
                            <div className={'recipe__overlay'}>
                                <h2>{recipe.title}</h2>
                            </div>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}