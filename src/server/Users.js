import { useEffect, useState } from "react"
import ListUsers from "./ListUsers"

const DEFAULT_URL = "http://localhost:5000/users";

async function fetchPosts() {
  const response = await fetch(DEFAULT_URL);
  const blogPosts = await response.json();
  return blogPosts;
}

function Users() {
    const [loadedPosts, setLoadedPosts] = useState([]);
//   function fetchPostsHandler() {
//     fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
//   }

  useEffect(function () {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, []);

  return (
    <div>
        <ListUsers Users={loadedPosts}/>
    </div>

  );
}

export default Users