import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}
