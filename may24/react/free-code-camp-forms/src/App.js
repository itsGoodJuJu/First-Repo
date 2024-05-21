// import logo from './logo.svg';
import './App.css';
import ControlledComponent from './components/Component'
import Dropdown from './components/Dropdown'
import Checkbox from './components/Checkbox'
import Multiple from './components/Multiple'
import MyForm from './components/MyForm'
import Uncontrolled from './components/Uncontrolled'

function App() {
  return (
    <>
      <ControlledComponent />
      <Dropdown />
      <Checkbox />
      <Multiple />
      <MyForm />
      <Uncontrolled />
    </>
  );
}

export default App;
