import React from 'react';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import Input from '../Input/Input';
import { useState, useEffect, useRef } from 'react';
import './Terminal.css';

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
      console.log(txtInput)
      console.log(components)
      setComponents(prevComponents => [
        ...prevComponents,
        routes['default'], routes['input']
      ]);
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
    }
  };

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
          return name === 'input' (

            <Component {...props} key ={index} />
          )
        })}
      </ul>
    </div>
  )
}

export default Terminal