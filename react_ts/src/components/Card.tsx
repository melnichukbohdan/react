import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}
interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: React.ReactNode;
    onClick: (num: number) => void;
}
const Card: FC<CardProps> =
    ({
        width,
        height,
        variant,
        onClick,
        children
    }) => {
        const [number, setNumber] = useState(0);
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'node',
            background: variant === CardVariant.outlined ? 'lightgrey' : '',
        }}
            onClick={() => onClick(number)}
        >
            {children}
        </div>
    );
};

export default Card;