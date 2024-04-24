import React, {createContext} from 'react'
import { useState, useContext } from 'react'
 
 
    const ColorContext = createContext({
        color:'lightGrey',
        setColor:() => {}
    })

    // color picker function 
 function ColorPicker () {
    const colors = ['red','blue','yellow','green','black','orange','purple']
    const {setColor} = useContext(ColorContext)
    return(
        <div className='flex justify-center items-center'>
            <h1 className='font-bold text-2xl m-10'>Choose a color</h1>
            {colors.map(color => <button className='w-5 h-5 m-3'onClick={()=> setColor(color)} key={color} style={{backgroundColor:color}}/>)}
            
        </div>
        
    )
 }

 function Pixel (){
    const {color} =useContext(ColorContext)
    const [pixelColor, setPixelColor] = useState('lightGrey')

    return <div onClick={()=> setPixelColor(color)} style={{height:'20px', width:'20px', backgroundColor:pixelColor, margin:'1px'}}/>
 }

 // function for defining the grid
 function Pixels (){
    const pixels=[]  //arrays to hold rows & colums
    for(let i=0; i<100; i++) pixels.push(<Pixel/>) // Add each row to the rows array

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