import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './Components/Form';
import { useState } from 'react';
import SavedForm from './Components/SavedForm';

function App() {

  

  // function handleSaveData(){

  // }


  return (
    <>
      <h1>Form</h1>
      <Form />
      <SavedForm />
    </>
  );
}

export default App;
