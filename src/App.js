import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div id="box">
		<Header/>

		<main id="main-content">
			<Home/>
        </main>
		
		<Footer/>
    </div>
  );
}

export default App;
