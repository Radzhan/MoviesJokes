import React, { useState } from 'react';
import FilmItem from './components/FilmItem/FilmItem';


function App() {

  const [item, setItem] = useState<string[]>([])

  let saveMassage: string;
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (saveMassage !== undefined){
      setItem(prev => [...prev, saveMassage])
    }
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const itemCopy = [...item]
    itemCopy[index] = e.target.value
    setItem(itemCopy)
  }

  const removeItem = (index: number) => {
    const copyItem = [...item]
    copyItem.splice(index, 1)
    setItem(copyItem)
  }
  
  const createItem = item.map((item, index) => (
    <FilmItem key={Math.random()} value={item} delete={() => removeItem(index)} onNameChange={(e: React.ChangeEvent<HTMLInputElement>)  => changeValue(e, index)}></FilmItem>
  ))

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => {
          saveMassage = e.target.value
        }} required/>
        <button type='submit'>Add</button>
      </form>
      {createItem}
    </>
  );
}

export default App;
