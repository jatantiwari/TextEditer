import './App.css';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import React,{useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  const[mode,setMode] =useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,text) => {
    setAlert({
        msg: message,
        txt:text
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 1000);
}
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark mode enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode enabled","success")
    }
  }
  
  return (
    <>

    <Navbar title = "TextEditer" mode ={ mode} toggleMode = {toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <TextInput showAlert={showAlert} heading = "Enter the text" mode ={ mode}/>
    </div>
    <About/>
    <Footer/>
    </>
    

  );
} 

export default App;
