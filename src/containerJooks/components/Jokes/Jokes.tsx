import React, { useEffect, useState } from 'react';
import { blob } from 'stream/consumers';


const url = 'https://api.chucknorris.io/jokes/random'

const Jokes = () => {
    const [joke, setJoke] = useState([])

    const [booleanName, setBoleanName] = useState(false)

    const changeBooleanName = () => {
        setBoleanName(prev => !prev)
    }
    
    useEffect(() => {
        const fetchJoke = async () => {
            const response = await fetch(url);

            if (response.ok) {
                const posts = await response.json();
                const saveJoke = posts.value

                setJoke(saveJoke)
            }
        }

        fetchJoke().catch(console.error)
    }, [booleanName])
    return (
        <>
            <p>{joke}</p>
            <button onClick={changeBooleanName}>New Joke</button>
        </>
    );
};

export default Jokes;