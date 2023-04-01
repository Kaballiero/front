import React from 'react';
import { Routes, Route} from 'react-router-dom';


import styles from './App.module.scss';
import Main from './page/Main/Main';
import Contacts from './page/Contacts/Contacts';

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path='main' element={<Main/>}/>
          <Route path='contacts' element={<Contacts/>}/> 
          
        </Routes>
    </div>
  );
}

export default App;
