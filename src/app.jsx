
import { useEffect, useState } from 'react';
import Greeter from "./components/Greeter";

const App = () => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        setTimeout(() => {

            setLoaded(true);

        }, 3000);

    }, [loaded]);

    if (!loaded) {

        return <>

            <h1>Website loading ...</h1>
            <button onClick={setLoaded}>click to enable</button>

        </>

    }

    return <>

        <Greeter phrase="hello!" name="bryan"></Greeter>
        <Greeter phrase="hello0!" name="korbin"></Greeter>
        <Greeter phrase="hello00!" name="steven"></Greeter>
        <p>You are logging in as: {username}</p>
        <input value={username} onChange={e => setUsername(e.target.value)}></input>

    </>

};

export default App;

