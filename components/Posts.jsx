import React from 'react'

const Posts = ({id, title, content, authorName}) => {
  return (
    <div className='border border-red-500 p-[15px]'>
        <h4>{title}</h4>
        <p>{content}</p>
        <p>Written by: {authorName}</p>
    </div>
  )
}

export default Posts