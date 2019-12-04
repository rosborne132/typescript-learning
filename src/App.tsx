import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head/Head'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import ReducerButton from './components/ReducerButton/ReducerButton'
import ClassComponent from './components/ClassComponent/ClassComponent'

import ContextProvider from './components/Context/Context'

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Head title="Hello" />
        <Button onClick={e => {
          e.preventDefault()
          console.log(e)
        }}>
          Text in Button
        </Button>

        <Input />
        <ReducerButton />

        <ClassComponent title="Class Component"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ContextProvider>
  );
}

export default App;
