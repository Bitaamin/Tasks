import React from 'react';
import { Outlet } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <h2>About</h2>
            <ul>
                <li><a href="/about/person">Person</a> </li>
                <li><a href="/about/company">Company</a> </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
