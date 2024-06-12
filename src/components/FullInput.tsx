import React, {ChangeEvent, useState} from 'react';

type Props = {
    setMessagesCallback: (message: string) => void
}

export const FullInput = ({setMessagesCallback}: Props) => {
    let [state, setTitle] = useState('');
    const onChangeInputHandler = (value: string) => {
        setTitle(value);
    }

    const onClickButtonHandler = () => {
        setMessagesCallback(state)
        setTitle('')
    }

    return (
        <div>
            <input value={state} onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeInputHandler(e.currentTarget.value)}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};