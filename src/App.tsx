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

  const removeItem = (index: number) => {
    const copyItem = [...item]
    copyItem.splice(index, 1)
    setItem(copyItem)
  }
  
  const createItem = item.map((item, index) => (
    <FilmItem key={Math.random()} value={item} delete={() => removeItem(index)}></FilmItem>
  ))

  console.log(item)

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
