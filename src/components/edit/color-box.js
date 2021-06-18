//edit 폴더에잇는것 edit .jㄴ dptj TMsmsrjt

import React from 'react'

function ColorBox({ color }) {
    console.log(color)
    return (
        <div>
        <div>
            <ColorBox color={color} />
            
        </div>
        <div 
            style={{
                width: 50,
                height: 50,
                backgroundColor: color,
            }}>Box</div></div>
        )
    }


export default ColorBox