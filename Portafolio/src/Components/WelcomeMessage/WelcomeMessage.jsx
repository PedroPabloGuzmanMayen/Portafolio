import React from 'react'
import './WelcomeMessage.css'

const WelcomeMessage = () => {
  return (
      <li>
        <div className='welcomeMessage'>
          <h1 classname = "title">
            <pre className = "title" >
              {`
Welcome to the shell                                                                                           
              `}
            </pre>
          </h1>
          <p>Use the help command to see a list of commands</p>
        </div>
      </li>
  );
}

export default WelcomeMessage;