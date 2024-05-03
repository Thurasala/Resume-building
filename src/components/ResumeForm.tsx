import React, { useRef, useState } from "react";
import {Box,Button,Card,CardContent,Grid,InputLabel,TextField,Typography} from "@mui/material";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "./ResumeForm.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  address: string;
}

const ResumeForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    address: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const resumeRef =useRef(null);
  const handlePreview = () => {
        if (resumeRef.current) {
          html2canvas(resumeRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
            pdf.save("edited-resume.pdf");
          });
        }
      };

  return (
    <Box sx={{ flexGrow: 1, m: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={6}>
          <Card className="personal-details-card">
            <CardContent sx={{ m: "auto" }}>
              <Typography variant="h5" component="div">
                Personal Details
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Get started with the basics: your name and contact information.
              </Typography>
            </CardContent>
            <Grid container spacing={2} m={2}>
              <Grid item xs={12}  sm={6} md={6} lg={6} >
                <Box>
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}  sm={6} md={6}  lg={6}>
                <Box>
                  <InputLabel htmlFor="lastName">Last Name</InputLabel>
                  <TextField
                    size="small"
                    name="lastName"
                    className="form-input"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box>
                  <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    type="tel"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box>
                  <InputLabel htmlFor="phone">Phone</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}sm={6} md={6} lg={6}>
                <Box>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}sm={6} md={6} lg={6}>
                <Box>
                  <InputLabel htmlFor="address">Address</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    type="email"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box>
                  <InputLabel htmlFor="city">City</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box>
                  <InputLabel htmlFor="zipCode">Zip Code</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    type="text"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box>
                  <InputLabel htmlFor="state">State</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    type="text"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Box>
                  <InputLabel htmlFor="country">Country</InputLabel>
                  <TextField
                    size="small"
                    className="form-input"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    type="text"
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={6}>
          <Card ref={resumeRef}>
            <Grid container spacing={2} m={2} >
              <Grid item xs={2}>
                <Box className="short-name" >
                  {formData?.firstName[0] || "C"}
                  {formData?.lastName[0] || "C"}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="candidate-name">
                  {formData?.firstName || "Chris"} <br />
                  {formData?.lastName || "Candidate"}
                </Box>
                <Box className="job-title">
                  {formData?.jobTitle || "Human Resource Manager"}
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className="contact">
                  {formData?.address || "4759 Sunnydale Lane"} <br />
                  {formData?.city || "Plano"}, {formData?.state || "TX"}{" "}
                  {formData?.zipCode || "75071"} <br />
                  {formData?.email || "email@youremail.com"} <br />
                  {formData?.phone || "(469) 385-2948"}
                </Box>
              </Grid>
              <Grid item xs={11}>
                <Typography className="resume-content">
                  Human resources generalist with 8 years of experience in HR,
                  including hiring and terminating, disciplining employees and
                  helping department managers improve employee performance.
                  Worked with labor unions to negotiate compensation packages
                  for workers. Organized new hire training initiatives as well
                  as ongoing training to adhere to workplace safety standards.
                  Worked with OSHA to ensure that all safety regulations are
                  followed.
                </Typography>
              </Grid>
              <Grid item xs={11}>
                  <Typography className="sub-heading">Professional Experience</Typography>
                  <Typography> 
                    <Box className="section-header">Human Resources Manager</Box>
                    <Box className="resume-content">Jim's Widget Factory, Plano, TX | January 2016 - Present</Box>  
                  </Typography>
                  <Typography className="resume-content" mt={1}>
                  <Box><span className="point-dot"></span>Implement effective company policies to ensure that all practices comply with labor and employment regulations</Box>
                  <Box><span className="point-dot"></span>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</Box>
                  <Box><span className="point-dot"></span>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</Box>
                  <Box><span className="point-dot"></span>Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met</Box>
                  </Typography>
                  <Typography mt={1}> 
                    <Box className="section-header">Human Resources Associate </Box>
                    <Box className="resume-content">Jim's Widget Factory, Plano, TX | March 2015 - January 2016</Box>  
                  </Typography>
                  <Typography className="resume-content" mt={1}>
                  <Box><span className="point-dot"></span>Implement effective company policies to ensure that all practices comply with labor and employment regulations</Box>
                  <Box><span className="point-dot"></span>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</Box>
                  <Box><span className="point-dot"></span>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</Box>
                  <Box><span className="point-dot"></span>Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met</Box>
                  </Typography>
              </Grid>
              <Grid item xs={11}>
                  <Typography className="sub-heading">Education</Typography>
                  <Typography> 
                    <Box className="section-header">Masters in Human Resources </Box>
                    <Box className="resume-content">The University of Texas, Dallas | September 2007 - May 2011</Box>  
                  </Typography>
                  <Typography className="resume-content" mt={1}>
                  <Box>Academic Awardee of AY 2007-2008</Box>
                  </Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography className="sub-heading">Key Skills</Typography>
                  <Typography className="resume-content" mt={1}>
                  <Box>Detail oriented </Box>
                  <Box>Well-versed in Texas employment law </Box>
                  <Box>Excellent written and oral communication skills </Box>
                  <Box>Develops positive workplace relationships</Box>
                  </Typography>


              </Grid>
            </Grid>
          </Card>
            <Box  sx={{mt:1}}>
             <Button   className="button" variant="outlined" onClick={handlePreview}>Download</Button>
            </Box>
        </Grid>

       
      </Grid>
    </Box>
  );
};

export default ResumeForm;





























// import React, { useState, useRef } from "react";
// import {
//   Box,
 
//   Card,
//   CardContent,
//   Grid,
//   InputLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// import "./ResumeForm.css";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   jobTitle: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   country: string;
//   address: string;
// }

// const ResumeForm = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     jobTitle: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "",
//     address: "",
//   });

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };
//   const componentRef = useRef(null);

//   const handlePreview = () => {
//     if (componentRef.current) {
//       html2canvas(componentRef.current).then((canvas) => {
//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, "PNG", 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
//         pdf.save("edited-resume.pdf");
//       });
//     }
//   };
//   return (
//     <Box sx={{ flexGrow: 1, m: 3 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <Card className="personal-details-card">
//             <CardContent sx={{ m: "auto" }}>
//               <Typography variant="h5" component="div">
//                 Personal Details
//               </Typography>
//               <Typography
//                 sx={{ fontSize: 14 }}
//                 color="text.secondary"
//                 gutterBottom
//               >
//                 Get started with the basics: your name and contact information.
//               </Typography>
//             </CardContent>
//             <Grid container spacing={2} m={2}>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="firstName">First Name</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     type="text"
//                   />
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="lastName">Last Name</InputLabel>
//                   <TextField
//                     size="small"
//                     name="lastName"
//                     className="form-input"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     type="text"
//                   />
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="jobTitle"
//                     value={formData.jobTitle}
//                     onChange={handleChange}
//                     type="tel"
//                   />
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="phone">Phone</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     type="tel"
//                   />
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="email">Email Address</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     type="email"
//                   />
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="address">Address</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     type="email"
//                   />
//                 </Box>
//               </Grid>

//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="city">City</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     type="text"
//                   />
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="zipCode">Zip Code</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="zipCode"
//                     value={formData.zipCode}
//                     onChange={handleChange}
//                     type="text"
//                   />
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="state">State</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     type="text"
//                   />
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <InputLabel htmlFor="country">Country</InputLabel>
//                   <TextField
//                     size="small"
//                     className="form-input"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     type="text"
//                   />
//                 </Box>
//               </Grid>
//             </Grid>
//           </Card>
//         </Grid>
//         <Grid item xs={6}>
//           <Card ref={componentRef}>
//             <Grid container spacing={2} m={2}>
//               <Grid item xs={2}>
//                 <Typography className="short-name" variant="h2">
//                   {formData?.firstName[0] || "C"}
//                   {formData?.lastName[0] || "C"}
//                 </Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography className="candidate-name">
//                   {formData?.firstName || "Chris"} <br />
//                   {formData?.lastName || "Candidate"}
//                 </Typography>
//                 <Typography>
//                   {formData?.jobTitle || "Human Resource Manager"}
//                 </Typography>
//               </Grid>
//               <Grid item xs={4}>
//                 <Typography className="contact">
//                   {formData?.address || "4759 Sunnydale Lane"} <br />
//                   {formData?.city || "Plano"}, {formData?.state || "TX"}{" "}
//                   {formData?.zipCode || "75071"} <br />
//                   {formData?.email || "email@youremail.com"} <br />
//                   {formData?.phone || "(469) 385-2948"}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography className="resume-content">
//                   Human resources generalist with 8 years of experience in HR,
//                   including hiring and terminating, disciplining employees and
//                   helping department managers improve employee performance.
//                   Worked with labor unions to negotiate compensation packages
//                   for workers. Organized new hire training initiatives as well
//                   as ongoing training to adhere to workplace safety standards.
//                   Worked with OSHA to ensure that all safety regulations are
//                   followed.
//                 </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                   <Typography className="sub-heading">Professional Experience</Typography>
//                   <Typography> 
//                     <Box>Human Resources Manager</Box>
//                     <Box className="resume-content">Jim's Widget Factory, Plano, TX | January 2016 - Present</Box>  
//                   </Typography>
//                   <Typography className="resume-content" mt={1}>
//                   <Box>Implement effective company policies to ensure that all practices comply with labor and employment regulations</Box>
//                   <Box>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</Box>
//                   <Box>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</Box>
//                   <Box>Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met</Box>
//                   </Typography>
//                   <Typography mt={1}> 
//                     <Box>Human Resources Manager</Box>
//                     <Box className="resume-content">Jim's Widget Factory, Plano, TX | January 2016 - Present</Box>  
//                   </Typography>
//                   <Typography className="resume-content" mt={1}>
//                   <Box>Implement effective company policies to ensure that all practices comply with labor and employment regulations</Box>
//                   <Box>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</Box>
//                   <Box>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</Box>
//                   <Box>Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met</Box>
//                   </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                   <Typography className="sub-heading">Education</Typography>
//                   <Typography> 
//                     <Box>Masters in Human Resources </Box>
//                     <Box className="resume-content">The University of Texas, Dallas | September 2007 - May 2011</Box>  
//                   </Typography>
//                   <Typography className="resume-content" mt={1}>
//                   <Box>Academic Awardee of AY 2007-2008</Box>
//                   </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                   <Typography className="sub-heading">Key Skills</Typography>
//                   <Typography className="resume-content" mt={1}>
//                   <Box>Detail oriented </Box>
//                   <Box>Well-versed in Texas employment law </Box>
//                   <Box>Excellent written and oral communication skills </Box>
//                   <Box>Develops positive workplace relationships</Box>
//                   </Typography>
//               </Grid>
//             </Grid>
//           </Card>
//         </Grid>
//         <Box>
//           <button className="button" onClick={handlePreview}>Preview</button>
//         </Box>
//       </Grid>
//     </Box>
//   );
// };

// export default ResumeForm;






