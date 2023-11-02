import { useState } from "react";

const ListUsers = ({Users}) => {
    const [selectUser, setSelectUser] = useState(null)

    const showData = (user) => {
        console.log(user.id)
        setSelectUser(user)
    }

    return (
        <div>
            <ul>
                {Users.map((user) => (
                    <li key={user.id}>
                        <span>{user.userName} </span>
                        <button onClick={() => {
                            showData(user)
                        }}>Mostrar datos</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListUsers;