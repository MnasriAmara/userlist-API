import './App.css';

import UserList from './components/userlist';
import { Route, Routes } from 'react-router-dom';
import UserInfos from './components/userinfos';


function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/userinfos/:id" element={<UserInfos/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
