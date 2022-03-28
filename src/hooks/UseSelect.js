import React, {useState} from 'react'

function UseSelect(initialState, options) {
    console.log("options ", options)
    console.log("initialState ", initialState)

    const [category, setSelect] = useState(initialState)

   const Selectnews = () =>  ( 
        <select 
        className="input-select"
        value={category}
        onChange={e => setSelect(e.target.value)}
        >
           {options?.map(option =>(<option value={option.value} key={option.value}>{option.value}</option>))}
       </select>
       )

   return [
    category, Selectnews
   ]
}

export default UseSelect
