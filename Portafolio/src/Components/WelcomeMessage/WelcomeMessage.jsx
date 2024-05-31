import React from 'react'
import './WelcomeMessage.css'

const WelcomeMessage = () => {
  return (
      <li>
        <div className='welcomeMessage'>
          <h1 classname = "title">
            <pre className = "title" >
              {`
░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████                                                                                         
              `}
            </pre>
          </h1>
          <p className = 'message'>Welcome I'm PPGM (Pedro Pablo Guzman Mayen) and this is my poRtafolio, you can use the help command to learn about me, see my job and there's a secret command to get a surpirse, try to find it 😉</p>
        </div>
      </li>
  );
}

export default WelcomeMessage;