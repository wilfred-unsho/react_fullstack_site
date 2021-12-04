import React from 'react'
import { useParams } from 'react-router-dom';

export default function ArticlePage() {
  const params = useParams();
  return (
    <>
      <h1>{params.name} Article Page</h1>
    </>
  )
}
