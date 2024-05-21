// import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import Functional from './components/Functional'
import Class from './components/Class'
import Navbarcomp from './components/Navbar'

function App() {
  return (
    <>
      <Navbarcomp />
      <Form />
      <hr/>
      <Functional />
      <hr/>
      <Class />
    </>
  );
}

export default App;
