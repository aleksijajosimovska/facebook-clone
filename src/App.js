import React from 'react';
import './App.css';
import { userRef } from './firebase';


function App() {
  useEffect(() => {
    function callFunc(){
      userRef.set({
        email:"alexia@gmail.com",
        password:"123456789"
      })
    }
  callFunc();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Facebook clone
        </p>
      </header>
    </div>
  );
}

export default App;
