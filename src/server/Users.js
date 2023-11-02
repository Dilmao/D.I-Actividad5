import { useState } from "react"
import ListUsers from "./ListUsers"

//INICIALIZAR BIEN A LOS USUARIOS
const initialUsers = [
    {id: 1, name:"Diego", userName:"Dilamo", email:"diego@gmail.com", phone:"154812184", companiesId:1, title:"Titulo 1"},
    {id: 2, name:"manolo", userName:"Manolito", email:"manolo@gmail.com", phone:"9893548125", companiesId:2, title:"Titulo 1"}
]

const Users = () => {
    const [users, setUsers] = useState(initialUsers)
    return (
        <div>
            <ListUsers Users={users}/>
        </div>
    )
}

export default Users