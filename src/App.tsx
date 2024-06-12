import React, {useState} from 'react';
import './App.css';
import {Input} from './components/Input';
import {Button} from './components/Button';

function App() {
    let [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [newMessage, setNewMessage] = useState('');

    const addMessage = () => {
        setMessages([{message: newMessage}, ...messages])
        setNewMessage('')
    }

    return (
        <div className="App">
            <div>
                {/*<FullInput addMessage={addMessage}/>*/}
                <Input value={newMessage} setNewMessage={setNewMessage}/>
                <Button name={'+'} onClickButtonHandler={addMessage} />
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
