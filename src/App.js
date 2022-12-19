import './App.css';
import FirstPage from './components/firstPage/firstPage';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='mainAppContainer'>
        <FirstPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
