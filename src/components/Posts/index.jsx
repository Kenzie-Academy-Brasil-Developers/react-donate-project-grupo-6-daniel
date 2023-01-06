import { useEffect, useState } from "react";
import { StyledPosts } from "./style";
import { api } from "../../services/api";
import PostCard from "./postCard";

const PostsList = ({titleList}) =>{
    const [postList, setPosts] = useState([]);

    useEffect(()=> {
        async function loadPosts() {
            const {data} = await api.get("/posts/?_expand=user");
            const actualId = 3;
            const actualList = data.filter(post => post.userId == actualId);
            console.log(actualList);
            setPosts(actualList);
        }
        loadPosts();  
    }, []);
    return( 
        <>
            <StyledPosts>
                <h3>{titleList}</h3> 
                    {postList.map(({title, description, id})=>{
                        return <PostCard title={title} description={description} idPost={id} key={id}/>
                    })}
            </StyledPosts>
        </>
    )
}

export default PostsList