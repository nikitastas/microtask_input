import React from 'react';

type Props = {
    name: string
    onClickButtonHandler: () => void
}

export const Button = ({name, onClickButtonHandler}: Props) => {
    return (
        <div>
            <button onClick={onClickButtonHandler}>{name}</button>
        </div>
    );
};