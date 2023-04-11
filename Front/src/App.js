import style from './App.module.css';
import Nav from "./components/Nav/Nav.jsx";
import Cards from './components/Cards/Cards.jsx';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App () {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const username = "micorreo@mail.com";
  const password = "mipass123";

useEffect(()=>{ 
   !access && navigate("/");
   }, [access]);

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            let exist = characters.find((char) => char.id === data.id);
            if (exist) {
               alert("Personaje repetido");
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
            
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 };

 function onClose (id) {
   setCharacters((oldChars) => {
  return oldChars.filter((char) => char.id !== id)});
 };

 const login = (userData) => {
   if (userData.username === username && userData.password === password) {
       setAccess(true);
       navigate("/home");
    } else {
      alert("Datos incorrectos")
    }
 };
  return (
   
    <div className={style.App}>
      {pathname !== "/" && <Nav onSearch={onSearch}/> }
       <Routes>
         <Route path='/' element={<Form  login={login}/>} />
         <Route
         path="/home" 
         element= {<Cards onClose={onClose} characters={characters} />}
         />
         <Route path='/about' element={<About />}/>
         <Route path='/detail/:detailId' element={<Detail />}/> 
       </Routes>
           
     </div>
     
  )
}

export default App
