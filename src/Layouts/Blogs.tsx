import React from 'react'
import BlogsHero from '../Components/Blogs/BlogsHero'
import BlogList from '../Components/Blogs/BlogList'

function Blogs() {
    return (
        <section style={{ marginTop: '10%' }} >
            <BlogsHero />
            <BlogList />
        </section>
    )
}

export default Blogs