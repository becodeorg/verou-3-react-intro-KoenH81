import React from "react";
function List() {
    const initialTodos = ["My first todo", "My second todo"];



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