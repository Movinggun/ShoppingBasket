import React from 'react'
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

const CustomBtn = ({label, onClick}) => {
    return (
        <Button variant={"contained"} style={{background: 'linear-gradient(to right, #6975dd , #7355b0)', paddingLeft: 20, paddingRight: 20, color: 'white', width: '100%'}} onClick={onClick} >
        {label}
       </Button>
    )
}

export default CustomBtn
