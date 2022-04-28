// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Component/NavBar";
import TextForm from "./Component/TextForm";

//

function App() {
  return (
    (<Navbar title="Text Utinslis" aboutText=" About Text Utility" />),
    (
      <div className="container">

        <TextForm heading=" Enter Your Text Here " />

      </div>
    )
  );
}

export default App;
