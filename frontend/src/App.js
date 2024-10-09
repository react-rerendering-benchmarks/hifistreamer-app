import { memo } from "react";
/**
 * The application class
 * @author Oren Sokoler
 */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
const App = memo(function App() {
  return <div className="App">
        <MainPage />
    </div>;
});
export default App;