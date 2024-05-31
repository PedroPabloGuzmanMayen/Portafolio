import React from 'react'
import './Face.css'

const Face = () => {
    return  (
        <div className='joke'>
            <p className='description'>My real face</p>
            <img
                className='image'
                src={'https://media.licdn.com/dms/image/C4E03AQE0fKZFLsvrVQ/profile-displayphoto-shrink_200_200/0/1642694860624?e=2147483647&v=beta&t=vyQz6h5hWlHkfGtUS7TTC2MJo3JgFEYe5BF-1IQI4EA'}
                alt='my face'
            />
        </div>
    ) 
}

export default Face