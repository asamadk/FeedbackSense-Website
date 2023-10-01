import React, { useEffect, useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../Utils/Sanity';
import { useParams } from 'react-router';
import FSLoader from '../FSLoader';
import { Box, useMediaQuery } from '@mui/material';
import { setDocumentTitle } from '../../Utils/DOMUtils';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
    return builder.image(source)
}

function SingleBlogDetail() {

    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState<any>(null);
    let init = false;

    useEffect(() => {
        if (init === true) { return; }
        init = true;
        setLoading(true);
        sanityClient
            .fetch(
                `*[_type == "post" && slug.current == $slug]{
                  title,
                  _id,
                  "name": author->name,
                  body,
                  mainImage{
                    asset->{
                      url
                    }
                  },
                }`,
                { slug }
            )
            .then((data) => {
                setLoading(false);
                setDocumentTitle(data[0]?.title);
                return setPostData(data[0])
            })
            .catch(() => {
                setLoading(false);
            });
    }, [slug]);

    const isSmallScreen = useMediaQuery('(max-width: 830px)');

    const mainContainerStyle = {
        textAlign: 'start',
        padding: '10%',
        paddingTop: '0',
        marginTop: '10%',
    }

    const mainBlogStyle = {
        width : isSmallScreen === false ? '60%' : '100%',
        margin : 'auto',
        // background : '#454545',
        padding : '10px',
        borderRadius : '10px',
        fontSize : '20px',
        letterSpacing : 1
    }

    return (
        <Box sx={mainContainerStyle} >
            <Box>
                <Box width={isSmallScreen === false ? '50%' : '100%'} margin={'auto'}>
                    <h1>{postData?.title}</h1>
                    <span style={{color : '#808080'}} >By {postData?.name}</span>
                    <Box marginTop={'20px'} ></Box>
                </Box>
                <Box width={isSmallScreen === false ? '50%' : '100%'} margin={'auto'} >
                    {
                        postData?.mainImage != null &&
                        <img 
                            style={{width : '100%'}}
                            alt='MainImage' 
                            src={urlFor(postData?.mainImage?.asset?.url).width(500).url()} 
                        />
                    }
                </Box>
            </Box>
            <Box sx={mainBlogStyle} >
                <BlockContent
                    key={postData?._id}
                    blocks={postData?.body}
                    imageOptions={{ w: isSmallScreen === false ? 500 : 300}}
                    projectId={'g4kwnxho'}
                    dataset={'production'}
                />
            </Box>
            <FSLoader show={loading} />
        </Box>
    )
}


export default SingleBlogDetail