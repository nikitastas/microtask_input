import React, {ChangeEvent} from 'react';

type Props = {
    value: string
    setNewMessage: (newMessage: string) => void
}



export const Input = ({value, setNewMessage}: Props) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.currentTarget.value)
    }

    return (
        <div>
            <input value={value} onChange={onChangeInputHandler}/>
        </div>
    );
};