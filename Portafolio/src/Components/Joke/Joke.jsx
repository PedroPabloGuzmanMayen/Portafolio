import React from 'react'
import './Joke.css'

const Joke = () => {
    return  (
        <div className='joke'>
            <p className='description'>My real face</p>
            <img
                className='image'
                src={'https://preview.redd.it/believe-it-or-not-this-injustice-1-poster-about-the-joker-v0-0o8hi3301ymb1.jpg?width=640&crop=smart&auto=webp&s=de9b68c99d89748b375e6254a625bcb4de8fa1ac'}
                alt='joker'
            />
            <p className='description'>It's a joke, please type real to see my real face</p>
        </div>
    ) 
}

export default Joke
