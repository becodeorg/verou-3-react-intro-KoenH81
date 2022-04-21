import React, { useState, useRef } from "react";
function Input() {
    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current;
        console.log(inputElement.value);
    }
    return (
        <>
            <div>
                <label for="newTodo">New Todo</label><br />
                <input ref={inputRef} type="text" placeholder="New Todo" /><br /><br />
                <button onClick={clickHandler}>Add Todo</button>
            </div>
            <br />
        </>
    );
}
export default Input;