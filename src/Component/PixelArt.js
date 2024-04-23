import React, {createContext} from 'react'
import { useState, useContext } from 'react'
 
 
    const ColorContext = createContext({
        color:'lightGrey',
        setColor:() => {}
    })
 function ColorPicker () {
    const colors = ['red','blue','yellow','green','black','white','purple']
    const {setColor} = useContext(ColorContext)
    return(
        <div>
            <h1 style={{font:'bold'}}>Choose a color</h1>
            {colors.map(color => <button onClick={()=> setColor(color)} key={color} style={{backgroundColour:color, width:'10px',height:'10px', margin:'10px'}} />)}
        </div>
    )
 }

 function Pixel (){
    const {color} =useContext(ColorContext)
    const [pixelColor, setPixelColor] = useState('lightGrey')

    return <div onClick={()=> setPixelColor(color)} style={{height:'20px', width:'20px', backgroundColor:pixelColor, margin:'1px'}}/>
 }

 function Pixels (){
    let pixels=[]  //arrays to hold rows & colums
    for(let i=0; i<100; i++) pixels.push(<pixels/>) // Add each row to the rows array

    // Render the grid
    return(
        <div style={{display:'grid', gridTemplateColumns:'repeat(10,1fr)', width:'210px', margin:'0 auto'}}>
            {pixels}
        </div>
    )
 }

 function PixelArt () {
    const [color, setColor] = useState('lightGrey')
    return (
      <div>
        <ColorContext.Provider value={{color, setColor}}>
        <ColorPicker/>
        <Pixels/>
        <Pixel/>
        </ColorContext.Provider>
      </div>
    )
  }
  
  export default PixelArt;