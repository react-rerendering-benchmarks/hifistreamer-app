/**
 * The application class
 * @author Oren Sokoler
 */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
function App() {
  console.log(window.globalCount++);
  return <div className="App">
        <MainPage />
    </div>;
}
export default App;