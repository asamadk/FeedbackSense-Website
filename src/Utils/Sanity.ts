import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'g4kwnxho', // you can find this in sanity.json
    dataset: 'production', // e.g., 'production'
    useCdn: true, // `false` if you want to ensure fresh data
});