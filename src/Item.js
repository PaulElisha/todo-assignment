import React from 'react'

const Item = ({ items, handleDelete, handleCheck }) => {
    return (
        <ul>
            {items.map(item =>
            (<li key={item.id}>
                {/* <input type="checkbox" checked={item.completed} onChange={() => handleCheck(item.id)} /> */}
                {item.todo}
                <button className="del" key={item.id} onClick={() => handleDelete(item.id)}>
                    Delete
                </button>
            </li>))}
        </ul>
    )
}

export default Item