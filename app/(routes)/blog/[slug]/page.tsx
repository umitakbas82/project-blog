import React from 'react'

const BlogSlugPage = async ({params}:{params:Promise<{slug:string}>}) => {

    const slug=(await params).slug
  return (
    <div>{slug}</div>
  )
}

export default BlogSlugPage