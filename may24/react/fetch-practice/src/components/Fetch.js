import React, {useEffect} from 'react';

export default function Fetch() {
    useEffect(() => {
        async function fetchData() {
            await fetch('http://localhost:3000/event')
            .then((results) => results.json())
            .then((data) => {
                console.log(data)
            })
        }
        fetchData();
        
    }, []);

  return (
    <>
        <div>Fetch (check console)</div>
        {/* <button onClick={practiceEffect}>Fetch</button> */}
    </>
    
  )
}
