import { useEffect, useState } from "react";

const ListUsers = ({Users}) => {
    const [selectUser, setSelectUser] = useState(null)
    const [loadedPosts, setLoadedPosts] = useState([]);

    

    const DEFAULT_URL = "http://localhost:5000/users/" + selectUser;

    async function fetchPosts() {
      const response = await fetch(DEFAULT_URL);
      const blogPosts = await response.json();
      return blogPosts;
    }

    useEffect(
        ()=> {
            console.log(DEFAULT_URL);
            fetchPosts().then((fetchedPosts) => {
                setLoadedPosts(fetchedPosts);
            
                const selectedUser = Users.find((user) => user.id === selectUser);
                if (selectedUser) {
                    console.log(selectedUser.id);
                    console.log(selectedUser.name);
                    console.log(selectedUser.email);
                    console.log(selectedUser.phone);
                }
              });
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
                    //MOSTRAR LOS DATOS DE selectedUser debajo del </ul>
                ))}
            </ul>
           {selectUser && 
           <div>
                <h2>Informacion de usuario:</h2>
                <span>{loadedPosts.name}</span>
                <br/>
                <span>{loadedPosts.email}</span>
                <br/>
                <span>{loadedPosts.phone}</span>
           </div>
           }  
        </div>
    )
}

export default ListUsers;