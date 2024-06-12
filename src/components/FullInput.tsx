import React, {ChangeEvent, useState} from 'react';

type Props = {
    addMessage: (message: string) => void
}

export const FullInput = ({addMessage}: Props) => {
    let [state, setTitle] = useState('');

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        addMessage(state)
        setTitle('')
    }

    return (
        <div>
            <input value={state} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};