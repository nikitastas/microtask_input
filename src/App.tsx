import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';

function App() {
    let [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const setMessagesCallback = (newMessage: string) => {
        setMessages([...messages, {message: newMessage}])
    }

    return (
        <div className="App">
            <div>
                <FullInput setMessagesCallback={setMessagesCallback}/>
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
