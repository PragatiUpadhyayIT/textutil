import "./App.css"
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
   <>
   <Navbar title= "Textutils"/>
   <Textform Heading="Enter your text for analyzing"/>
   {/* <About/> */}
   </>
  );
}

export default App;
