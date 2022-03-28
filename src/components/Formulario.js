import React, {useState} from 'react'
import '../styles/Formulario.scss'
import UseSelect from '../hooks/UseSelect'


function Formulario({saveCategory}) {

    const OPTIONS =[

        {value:"general", label:"General"},
        {value:"business", label:"Negocios"},
        {value:"entertainment", label:"Entretenimiento"},
        {value:"health", label:"Salud"},
        {value:"science", label:"Ciencias"},
        {value:"sports", label:"Deportes"}, 
        {value:"technology", label:"Tecnologia"}
    ]
    console.log("OPTIONS send ", OPTIONS)
    const [category, Slectnews ] = UseSelect('general', OPTIONS)
  const handleSubmitNew = e =>{
      e.preventDefault()
      saveCategory(category)
  }

    return (
        <React.Fragment>
  
           <form className="formulario--container" onSubmit={handleSubmitNew}>
                <Slectnews/>
                    <button
                    type="submit"
                    className="btn btn-primary"
                    >Search</button>
            </form>
       </React.Fragment>
        
          
    
    )
}

export default Formulario
