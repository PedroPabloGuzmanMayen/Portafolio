import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Input from './Components/Input/Input'
import WelcomeMessage from './Components/WelcomeMessage/WelcomeMessage'
import './App.css'

function App() {
  console.log('re render')

  
  const [components, setComponents] = useState([])
  const txtInput = useRef()

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
      key: 'input',
      Component: Input,
      props: {value: txtInput.current, onChange: changeValue, onEnter: onEnter }
    },
    'welcome': {
      key: 'welcome',
      Component: WelcomeMessage,
      props: { }
    },
    'default': {
      key: 'default',
      Component: () => <h1 key="default">Command not found</h1>,
      props: { }
    }
  };

  useEffect(() => {
    setComponents([routes['welcome'], routes['input']])
    console.log(components)
  }, [])


  return (
    <ul className="list">
      {components.map((comp) => {
        const { Component, props } = comp;
        return (
            <Component {...props} />
        );
      })}
    </ul>
  )
}
export default App
