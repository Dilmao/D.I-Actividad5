import './App.css';
import Users from './server/Users';


  //Enlace al servidor: http://localhost:5000/users
function App() {
  return (
    <div className="App">
      <h1>Lista de usuarios</h1>
      <Users/>
    </div>
  );
}

export default App;
