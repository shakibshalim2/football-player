import React from 'react';
import css from './Cart.css'

const Cart = (props) => {
const cart = props.cart;
const totalSalary  = cart.reduce((sum, player) => sum + player.salary, 0)
    return (
        <div>
            <h1>Selected player list:</h1>
            {
cart.map(player => <li>Name: {player.name}, Salary: ${player.salary}</li>)
            }
<p className="text-color">Total Budget: ${totalSalary}</p>
        </div>
    );
};

export default Cart;