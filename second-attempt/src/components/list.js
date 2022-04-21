import React, { useState } from "react";
function List() {



    return (
        <ol>
            {todos.map((todo, index) => (
                <li key="{index}">
                    <input type="checkbox" id="{index}" /> {todo}
                </li>
            ))}
        </ol>
    );
}

export default List;