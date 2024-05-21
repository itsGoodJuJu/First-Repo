import React, {useState, useEffect} from 'react';

export default function Playground() {
    const [text, setText] = useState("a");

    useEffect(() => {
        function onTimeout() {
            console.log(text);
        }

        console.log('Schedule"' + text + '"log');
        const timeoutId = setTimeout(onTimeout, 5000);

        return () => {
            console.log('Cancel"' + text + '"log');
            clearTimeout(timeoutId);
        };
    }, [text]);

  return (
    <>
        <label>
            What to log: {" "}
            <input value = {text} onChange={(e) => setText(e.target.value)}  ></input>
        </label>
        <h1>{text}</h1>
    </>
  )
}

