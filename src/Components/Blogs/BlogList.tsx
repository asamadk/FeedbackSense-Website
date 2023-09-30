import { Box, Grid, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import sanityClient from '../../Utils/Sanity'
import FSLoader from '../FSLoader';

function BlogList() {

    let init = false;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (init === true) { return; }
        init = true;
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                _createdAt,
                body,
                mainImage{
                  asset->{
                    url
                  }
                },
                author->{
                  name
                }
              }
              `)
            .then((data) => {
                setLoading(false);
                setPosts(data);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const [posts, setPosts] = useState<any[]>([]);
    const isSmallScreen = useMediaQuery('(max-width: 830px)');

    const subContainerStyle = {
        width: isSmallScreen === false ? '100%' : 'fit-content',
        margin: isSmallScreen === false ? '' : 'auto',
        display: isSmallScreen === false ? 'flex' : 'block',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }

    return (
        <Box sx={{ margin: '10px', marginTop: '20px', padding: '10px' }} >
            <Box sx={subContainerStyle} >
                {
                    posts.map(post => {
                        return (
                            <Box
                                key={post._id}
                                marginRight={isSmallScreen === false ? '20px' : '0'}
                                borderRadius={'10px'}
                                marginTop={'20px'}
                            >
                                <BlogCard
                                    post={post}
                                />
                            </Box>
                        )
                    })
                }
            </Box>
            <FSLoader show={loading} />
        </Box>
    )
}

export default BlogList