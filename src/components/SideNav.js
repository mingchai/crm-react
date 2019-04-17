import React from 'react';
import {NavLink} from 'react-router-dom';

export default function SideNav() {
  return (
    <nav style={{float:"left"}}>
      <ul>
        <li style={{listStyleType:"none"}}>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li style={{listStyleType:"none"}}>
          <NavLink exact to="/clients">Clients Directory</NavLink>
        </li>
        <li style={{listStyleType:"none"}}>
          <NavLink exact to="/users">User Directory</NavLink>
        </li>
        <li style={{listStyleType:"none"}}>
          <a href="http://">Sign Out</a>
        </li>
      </ul>
    </nav>
  )
}
