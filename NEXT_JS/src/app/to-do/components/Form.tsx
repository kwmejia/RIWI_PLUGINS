"use client";

import { FormEvent, useState } from "react";

export const Form = () => {
   const [formState, setFormState] = useState({
    name: '',
    date: '',
    description: ''
   })

   function handleSubmit(e: FormEvent<HTMLFormElement> ){
     e.preventDefault()

       console.log(formState)
    //Peticion POST HTTP
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    //Redireccionar a la pagina principal
 
   }
  return (
    <form className="flex flex-col  gap-5 m-10 " onSubmit={handleSubmit}>
      <div className="w-50 flex flex-col">
        <label htmlFor="name">Nombre de la tarea</label>
        <input
          type="text"
          id="name"
          className="h-12 px-4 py-1 rounded border border-blue-500 focus:outline-none"
          onChange={(e) => setFormState({...formState, name: e.target.value})}
        />
      </div>

      <div className="w-50 flex flex-col">
        <label htmlFor="date">Fecha de la tarea</label>
        <input
          type="datetime-local"
          id="date"
          className="h-12 px-4 py-1 rounded border border-blue-500 focus:outline-none"
          onChange={(e) => setFormState({...formState, date: e.target.value})}
    
        />
      </div>

      <div className="w-50 flex flex-col">
        <label htmlFor="description">Descripción de la tarea</label>
        <input
          type="text"
          id="description"
          className="h-20 px-4 py-1 rounded border border-blue-500 focus:outline-none"
          onChange={(e) => setFormState({...formState, description: e.target.value})}
       />
      </div>
      <button type="submit" className="bg-blue-600 hover:bg-blue-400 max-w-max py-1 rounded-lg text-white px-3">Crear tarea</button>
    </form>
  );
};
