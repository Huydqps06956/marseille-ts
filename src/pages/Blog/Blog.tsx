import React, { useEffect, useState } from 'react';

const Blog = () => {
    console.log('blog');
    const [name, setName] = useState('huy');
    useEffect(() => {
        console.log('fetch');
        setName('quang huy');
    }, []);

    return <div>Blog {name}</div>;
};

export default Blog;
