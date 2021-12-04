import React from 'react'
import {Outlet} from 'react-router-dom'

export default function ArticleList() {
  return (
    <div>
      <h1>Articles</h1>
      <Outlet />
    </div>
  )
}
