import React, { FormEvent, useState } from "react";
import { useGlobalContext } from "../context";

const Input = () => {
  const { setAmountOfCards, setAlert, inputRef, setNewData } =
    useGlobalContext();
  const [value, setValue] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!inputRef?.current) return;
    console.log('handleSubmit');
    
    e.preventDefault();

    const showResults = value <= 10 && value >= 0;

    if (!showResults) {
      setAlert(true);
      return;
    }

    setNewData([]);
    setAmountOfCards(value);
    inputRef.current.value = "";
  };

  const handleInputChange = (e: any) => {
    const value = Number(e?.target?.value);
    setAmountOfCards(0);
    setValue(value);
    console.log('inputChange');
  };

  return (
    <section className='input-section'>
      <form className='input-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Generate Planets</label>
          <input
            onWheel={(e) => (e.target as HTMLElement).blur()}
            onInput={handleInputChange}
            ref={inputRef}
            type='number'
            placeholder='How many planets do you want to generate?'
          />
        </div>
      </form>
    </section>
  );
};

export default Input;
