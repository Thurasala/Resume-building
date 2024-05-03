import React from "react";
import { Box,  Typography } from "@mui/material";
import resume1 from '../assests/resume1.png';
import resume2 from '../assests/resume2.png';
import { Link } from "react-router-dom";

import './Home.css'

const Home = () => {
    return(
    <Box>
       <Box sx={{textAlign:"center"}}>
       <Typography sx={{ fontSize: {  lg: 40, md: 30, sm: 20,xs: 15 }} } >Select a Template</Typography>
     
       <Typography  sx={{ fontSize: {  lg: 30, md: 20, sm: 15,xs: 10 }} } className="">  Select a color and a template to get started.</Typography>
       <br/>
       </Box>
       <Box className="image-container">
         <Box sx={{m:1}}>
            <Link to='/resumeform'>
            <img src={resume1} alt ='resume1'/>
            </Link>
         
         </Box>
         <Box>
            <Link to='/resumeform'>
            <img src={resume2} alt ="resume2"/>
            </Link>
        
         </Box>
       </Box>
    </Box>
    )

};
export default Home;