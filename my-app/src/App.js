// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Component/NavBar";
// import TextForm from "./Component/TextForm";
import About from "./Component/About"


//

function App() {
  return (
    (<Navbar title="Text Utinslis" aboutText=" About Text Utility" />),
    (
      <div className="container">

        {/* <TextForm heading=" Enter Your Text Here " /> */}
        <About    />

      </div>
    )
  );
}

export default App;
