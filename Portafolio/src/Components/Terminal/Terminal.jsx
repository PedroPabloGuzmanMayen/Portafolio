import React from 'react'
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage'
import Education from '../Education/Education'
import Input from '../Input/Input'
import About from '../About/About'
import Help from '../Help/Help'
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
      Component: () => <h1 key="default">Command not found</h1>,
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
          const { Component, props,name } = comp;
          return name === 'input' ? (

            <Component {...props} isDisabled={ index === components.length -1 ? false:true} key ={index} />
          ) : (
            <Component {...props} key ={index} />
          )
        })}
      </ul>
    </div>
  )
}

export default Terminal