import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
import './PersonalDetails.css';

interface FormData {
 
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  city: string;
  emailAddress:string;
  address:string;
  zipCode:string;
  state:string;
  country:string;
   
}

const PersonalDetails = () => {

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        jobTitle: '',
        phone: '',
        emailAddress:'',
        city: '',
        address:'',
        zipCode:'',
        state:'',
        country:'',
      });
    
      const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };
    
    //   const handleSubmit = () => {
    //     // Handle form submission logic here
    //     console.log(formData);
    //   };
    
      return (
        
        <Card>
          <CardContent>
            <Typography variant='h4'>Personal Details</Typography>
            <Typography variant='h6'>Get started with the basics: your name and contact information.</Typography>
            <Box className="input" >
            <TextField
              label="First Name"
              value={formData.firstName}
              onChange={(event) => handleChange('firstName', event.target.value)}
           
              margin="normal"
            />
            <TextField
              label="Last Name"
              value={formData.lastName}
              onChange={(event) => handleChange('lastName', event.target.value)}
             
              margin="normal"
            />
            </Box>
            <Box className="input">
            <TextField
              label="JobTitle"
              value={formData.jobTitle}
              onChange={(event) => handleChange('jobTitle', event.target.value)}
             
              margin="normal"
            />
            <TextField
              label="Phone"
              value={formData.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
           
              margin="normal"
            />
            </Box>
           
            <Box className="input">
             <TextField
              label="Email Address"
              value={formData.emailAddress}
              onChange={(event) => handleChange('emailAddress', event.target.value)}
            
              margin="normal"
            />

            <TextField
              label="Address"
              value={formData.address}
              onChange={(event) => handleChange('address', event.target.value)}
            
              margin="normal"
            />
            </Box>
            <Box className="input">
            <TextField
              label="City"
              value={formData.city}
              onChange={(event) => handleChange('city', event.target.value)}
            
              margin="normal"
            />
             <TextField
              label="Zip Code"
              value={formData.zipCode}
              onChange={(event) => handleChange('zipCode', event.target.value)}
            
              margin="normal"
            />
            </Box>
            <Box className="input">
            <TextField
              label="State"
              value={formData.state}
              onChange={(event) => handleChange('state', event.target.value)}
            
              margin="normal"
            />
             <TextField
              label="Country"
              value={formData.country}
              onChange={(event) => handleChange('country', event.target.value)}
            
              margin="normal"
            />
            
            </Box>

            

            
            {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button> */}
          </CardContent>
        </Card>
      );

};
export default PersonalDetails;