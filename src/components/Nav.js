import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Nav() {
    return (
        <div>
            <ul className="navbar">
                <li><NavLink className="" to="/">Home</NavLink></li>
                <li><NavLink className="" to="/order">Order</NavLink></li>
            </ul>
        </div>
    )
}
