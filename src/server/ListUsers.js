import { useEffect, useState } from "react";

const DEFAULT_URL = "http://localhost:5000/users/" + selectUser;

async function fetchPosts() {
  const response = await fetch(DEFAULT_URL);
  const blogPosts = await response.json();
  return blogPosts;
}
  
const ListUsers = ({Users}) => {
    const [selectUser, setSelectUser] = useState(null)



    useEffect(
        ()=> {
            console.log("Hola " + selectUser)
        }
        ,[selectUser]
    );


    return (
        <div>
            <ul>
                {Users.map((user) => (
                    <li key={user.id}>
                        <span>{user.username} </span>
                        <button onClick={() => {
                            setSelectUser(user.id)
                        }}>Mostrar datos</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListUsers;