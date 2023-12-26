import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrug, setIsDrug] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(inputRef.current?.value);
    }

    const drugHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRUG')
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrug(true);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrug(false);
        console.log('DROP')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrug(false);
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='controlled'/>
            <input ref={inputRef} type="text" placeholder='uncontrolled'/>
            <button onClick={clickHandler}>Apply</button>
            <div onDrag={drugHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{width: 200, height: 200, background: isDrug ? 'blue' : 'red', marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventsExample;