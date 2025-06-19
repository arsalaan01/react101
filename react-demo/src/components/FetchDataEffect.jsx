import React, { useEffect } from 'react'

const FetchDataEffect = () => {

    const [posts, setPosts] = React.useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        }
        fetchData();
    },[])

    return (
        <div>
            <h1>First Post Title:-</h1>
            { posts.length > 0 ?<h4>{posts[0].title}</h4>:<p>Loading...</p>}
        </div>
    )
}

export default FetchDataEffect