import { useState } from 'react'
import './components/Header/Header.css'
import './App.css'
import {Header} from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Header/>
      <ItemListContainer titulo={"Estos son nuestros productos"} />
    </>
  )
}

export default App

