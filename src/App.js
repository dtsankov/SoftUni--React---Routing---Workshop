import {Route, Routes} from 'react-router-dom'

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Catalog } from "./components/Catalog/Catalog";


function App() {
  return (
    <div id="box">
		<Header/>

		<main id="main-content">
			<Routes>
				<Route path ='/' element = {<Home/>} />
				<Route path ='/login' element = {<Login/>} />
				<Route path ='/register' element = {<Register/> } />
				<Route path ='/create-game' element = {<CreateGame/>} />
				<Route path ='/catalog' element = {<Catalog/>} />
			</Routes>
        </main>

		<Footer/>
    </div>
  );
}

export default App;
