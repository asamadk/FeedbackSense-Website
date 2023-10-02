import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import sanityClient from '../../Utils/Sanity'
import imageUrlBuilder from '@sanity/image-url'
import { useNavigate } from 'react-router';

function BlogCard({ post }: any) {

    const builder = imageUrlBuilder(sanityClient);

    function urlFor(source: any) {
        return builder.image(source)
    }

    const navigate = useNavigate();

    const [highlight, seHighLight] = useState<'#ffffff' | '#006dff'>('#ffffff');

    const handleMouseEnter = () => {
        seHighLight('#006dff');
    }

    const handleMouseLeave = () => {
        seHighLight('#ffffff')
    }

    const handleBlogClick = () => {
        document.title = post?.title
        navigate(`/blog/${post.slug.current}`)
    }

    return (
        // <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })} >
            <Card 
                onClick={handleBlogClick} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                sx={{ maxWidth: 345, height: '437px', cursor: 'pointer',backgroundColor : '#081213',padding : '0px 20px' }}
            >
                <CardMedia
                    component="img"
                    height="194"
                    image={urlFor(post.mainImage.asset.url).width(600).url()}
                    alt="Paella dish"
                />
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {post?.author?.name[0]}
                        </Avatar>
                    }
                    title={
                        <Typography
                            fontWeight={700}
                            variant='h4'
                            color={highlight}
                            textAlign={'start'}
                        >
                            {post.title?.substring(0, 47)}
                            {post.title?.length > 47 ? '...' : ''}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            textAlign={'start'}
                            color={'#808080'}
                        >
                            {new Date(post._createdAt).toDateString()}
                        </Typography>
                    }
                />
            </Card>
        // </ThemeProvider>
    )
}

export default BlogCard
