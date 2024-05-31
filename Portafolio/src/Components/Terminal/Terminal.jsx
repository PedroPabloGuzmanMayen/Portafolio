import React from 'react'
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage'
import Education from '../Education/Education'
import Input from '../Input/Input'
import About from '../About/About'
import Help from '../Help/Help'
import Joke from '../Joke/Joke'
import Projects from '../MyWork/Projects'
import Face from '../Face/Face'
import NotFound from '../NotFound/NotFound'
import Secret from '../Secret/Secret'
import Socials from '../Socials/Socials'
import { useState, useEffect, useRef } from 'react'
import './Terminal.css'

const Terminal = () =>{
      
  const [components, setComponents] = useState([])
  const txtInput = useRef()
  const ulRef = useRef();

  const changeValue = (e) => {
    console.log(e.target.value)
    txtInput.current = e.target.value
  }

  const onEnter = (e) => {
    if (e.keyCode === 13){
      if (txtInput.current === 'education'){
        setComponents(prevComponents => [
          ...prevComponents,
          routes['education'], routes['input']
        ])
      }
      else if (txtInput.current === 'about'){
        setComponents(prevComponents => [
          ...prevComponents,
          routes['about'], routes['input']
        ])
      }
      else if (txtInput.current === 'help'){
            setComponents(prevComponents => [
            ...prevComponents,
            routes['help'], routes['input']
            ])
        }
      else if (txtInput.current === 'face'){
            setComponents(prevComponents => [
            ...prevComponents,
            routes['joke'], routes['input']
            ])
        }
      else if (txtInput.current === 'clear'){
            setComponents([routes['input']])
        }
      else if (txtInput.current === 'welcome'){
                setComponents([routes['welcome'], routes['input']])
        }
       else if (txtInput.current === 'projects'){
            setComponents(prevComponents => [
                ...prevComponents,
                routes['projects'], routes['input']
                ])
        }
        else if (txtInput.current === 'real'){
            setComponents(prevComponents => [
                ...prevComponents,
                routes['real'], routes['input']
                ])

        }
        else if (txtInput.current === 'repo'){
            setComponents(prevComponents => [
                ...prevComponents,
                routes['repo'], routes['input']
                ])
        }
        else if (txtInput.current === 'socials'){
            setComponents(prevComponents => [
                ...prevComponents,
                routes['socials'], routes['input']
                ])
        }

      else {
        setComponents(prevComponents => [
            ...prevComponents,
            routes['default'], routes['input']
          ])

      }
    }
  }

  const routes = {
    'input': {
      name: 'input',
      Component: Input,
      props: {value: txtInput.current, onChange: changeValue, onEnter: onEnter }
    },
    'welcome': {
      name: 'welcome',
      Component: WelcomeMessage,
      props: { }
    },
    'default': {
      name: 'default',
      Component: NotFound,
      props: { }
    },
    'education':{
        name: 'education',
        Component: Education,
        props: { }
    },
    'about':{
        name: 'about',
        Component: About,
        props: { }
    },
    'help':{
        name: 'help',
        Component: Help,
        props: { }
    },
    'joke':{
        name: 'joke',
        Component: Joke,
        props: { }
    },
    'projects':{
        name: 'projects',
        Component: Projects,
        props: { }
    },
    'real':{
        name: 'real',
        Component: Face,
        props: { }
    },
    'repo':{
        name: 'repo',
        Component: Secret,
        props: { }

    },
    'socials':{
        name: 'socials',
        Component: Socials,
        props: { }
    }
  }

  useEffect(() => {
    setComponents([routes['welcome'], routes['input']])
    console.log(components)
  }, [])

  useEffect(() => {      
    ulRef.current?.lastElementChild?.scrollIntoView()
  }, [components]);

  return (
    <div className="terminal">
      <ul ref={ulRef} className="list">
        {components.map((comp, index) => {
          const { Component, props, name } = comp;
          return name === 'input' ? (
            <Component {...props} isDisabled={index === components.length - 1 ? false : true} key={index} />
          ) : (
            <Component {...props} key={index} />
          );
        })}
      </ul>
    </div>
  );
  
}

export default Terminal