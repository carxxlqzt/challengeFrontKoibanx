import React from 'react'
import {URL_API} from '../const/const'
export const SearchBar = () => {
const [search,setSearch]=React.useState('')
const [status,setStatus]=React.useState('active')
const [querySearch,setQuerySearch] =React.useState('')
const queryStatus =`{'status':'${status}'}`
const querySintaxis =`{'${querySearch}':'${search}'}`

function validate(){

    if (esNumero (search)){
      console.log ("La cadena de caracteres es NUMÉRICA: " + parseFloat(search).toFixed(2));
       return true
       
    }else{
        console.log ("La cadena de caracteres NO es NUMÉRICA");
        return  false
    
}
}
function esNumero (dato){
  /*Definición de los valores aceptados*/
  var valoresAceptados = /^[0-9]+$/;
  if (dato.indexOf(".") === -1 ){
      if (dato.match(valoresAceptados)){
         return true;
      }else{
         return false;
      }
  }else{
      //dividir la expresión por el punto en un array
      var particion = dato.split(".");
      //evaluamos la primera parte de la división (parte entera)
      if (particion[0].match(valoresAceptados) || particion[0]===""){
          if (particion[1].match(valoresAceptados)){
              return true;
          }else {
              return false;
          }
      }else{
          return false;
      }
  }
}
const handleChange=(event)=>{
  validate()
  setSearch(event.target.value)

}
const clickSearch = () =>{

   
    Search()
  console.log(URL_API+querySintaxis)
}
const handleChangeSelect=(event)=>{
setStatus(event.target.value)
  
}
const Search = ()=>{
if (validate) {
  setQuerySearch('number')
} else {
  setQuerySearch('name')
}

}



console.log(search)
    return (
        <div>
             <select  >
    <option value="Commerce">Commerce</option>
    <option value="CUIT">CUIT</option>
   
  </select>
  <input type='text' placeholder='Search' onChange={handleChange}></input>

  
  <select onChange={handleChangeSelect}>
    <option value="active">Active</option>
    <option value="not-active">Not-active</option>
   
  </select>
<button onClick={()=>{clickSearch()}}>buscar</button>
        </div>
    )
}
