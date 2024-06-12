import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';

function App() {
    let [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (newMessage: string) => {
        setMessages([{message: newMessage}, ...messages])
    }

    return (
        <div className="App">
            <div>
                <FullInput addMessage={addMessage}/>
            </div>
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
