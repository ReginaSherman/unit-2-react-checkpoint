import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

const App = () => {
  const [ contacts, setContacts ] = useState([])


  const url = '/contacts.json'
  
  
  useEffect (() => {
  fetch(url)
  .then((res) => res.json())
  .then((json) => setContacts(json))
  .catch((err) => console.log('Error!', err))
  }, [url])

  const addContact = (newContact) => setContacts([...contacts, newContact])

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={ <ContactList contacts={ contacts }/> }></Route>
          <Route path='/new-contact' element={ <NewContact addContact={ addContact } /> }></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
