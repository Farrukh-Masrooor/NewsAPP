import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './component/Navbar';
import News from './component/News';


import React, { Component } from 'react'



export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />  
          <Routes>
            <Route  path='/' element=             {<News key='general'pageSize={6} apiKey="84258988aded4ba7b1ce3ee074621cfe" category="general" country="in"/>}></Route>
            <Route  path='/business' element=     {<News key='business'pageSize={6} apiKey="84258988aded4ba7b1ce3ee074621cfe" category="business" country="in"/>}></Route>
            <Route  path='/technology' element=   {<News key='technoloy'pageSize={6} apiKey="84258988aded4ba7b1ce3ee074621cfe" category="technology" country="in"/>}></Route>
            <Route path='/sports' element=        {<News key='sports' pageSize={6} apiKey="84258988aded4ba7b1ce3ee074621cfe" category="sports" country="in"/>}></Route>
            <Route  path='/science' element=      {<News key='science'pageSize={6} apiKey="84258988aded4ba7b1ce3ee074621cfe" category="science" country="in"/>}></Route>
            <Route  path='/entertainment' element={<News key='entertainment'pageSize={6} apiKey="84258988aded4ba7b1ce3ee074621cfe" category="entertainment" country="in"/>}></Route>
            <Route path='/health' element=        {<News key='health' pageSize={6} apiKey="84258988aded4ba7b1ce3ee074621cfe" category="health" country="in"/>}></Route>
          </Routes>
        </div> 
      </Router>
    )
  }
}

export default App

