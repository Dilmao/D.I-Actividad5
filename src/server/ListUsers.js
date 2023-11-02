const ListUsers = ({Users}) => {

    const showData = () => {
        //Cambiar los 'li' para que tengan informacion
        <p>Hola wenas</p>
    }

    return (
        <div>
            <ul>
                {Users.map((user) => (
                    <li key={user.id}>
                        <span>{user.userName} </span>
                        <button onClick={() => {
                            showData()
                        }}>Mostrar datos</button>
                    </li>
                ))}
                <li id="nombre"></li>
                <li id="telefono"></li>
                <li id="mail"></li>
            </ul>
        </div>
    )
}

export default ListUsers;