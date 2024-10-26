import { useEffect, useState } from "react";

const fetchPosts = async () => {
   const data = await fetch(import.meta.env.VITE_BASE_API_URL)
   const json = await data.json()
   return json
}

const TestUseState = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const posts = fetchPosts()
        console.log(posts, 'posts')
       setData(posts)
    }, []);

    return (
        <div>

        </div>
    )
}


export default TestUseState;


// const Aboba1 = function(params) {


// }