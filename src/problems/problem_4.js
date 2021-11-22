import { useEffect, useState } from 'react';
export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

export function Problem () {
    const [counter, setCounter] = useState(0);
    const SAVED_KEY = "counter";
    const saved_counter = Number(localStorage.getItem(SAVED_KEY));

    function incrementCount () {
        if(saved_counter !== null){
        setCounter(count => count + 1);
        localStorage.setItem('counter', counter);
        }
    }

    function resetCount () {
        setCounter(0);
        localStorage.setItem('counter', counter);
    }

    useEffect(()=>{
        if(saved_counter !== null){
            setCounter(saved_counter + 1);
        }
    }, []);

    return <div className="btn-group">
            <button className="btn btn-primary" onClick={incrementCount} >Clicked {counter} times</button>
            <button className="btn btn-secondary" onClick={resetCount}>Reset</button>
        </div>;
    ;
}