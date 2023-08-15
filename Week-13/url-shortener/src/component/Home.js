import React from 'react'
import  InputShortener from './InputShortener';
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';
import { useState } from 'react';

const Home = () => {
    const[inputValue, setInputValue] = useState("");
  return (
    <div>
        <InputShortener setInputValue = {setInputValue} />
        <BackgroundAnimate />
        <LinkResult inputValue = {inputValue} />
    </div>
  )
}

export default Home