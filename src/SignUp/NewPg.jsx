import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
import { addPg, getAllPg } from "../api";
// import { Link } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { Card, CardMedia, Grid } from "@mui/material";
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { blue, blueGrey, red } from "@mui/material/colors";
// import { MuiThemeProvider } from "@material-ui/core";
// import { Margin } from "@mui/icons-material";
// import { red } from "@mui/material/colors";
import Man2RoundedIcon from "@mui/icons-material/Man2Rounded";
import WomanRoundedIcon from "@mui/icons-material/WomanRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import "./Form.css";
import "./Facility.css";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

// const defaultTheme = createTheme();

// const NewPg = () => {
//   let Facilities = [
//     "AC/Non AC",
//     "WiFi",
//     "Almirah",
//     "Table",
//     "Lift",
//     "Common Fridge",
//     "Chair",
//     "Laundry",
//     "Food",
//     "Geyser",
//     "Water Purifier",
//     "Power Backup",
//   ];
//   // const dispatch = useDispatch();
//   // const { pg, isLoading, error } = useSelector((state) => state.pg);
//   const [pgImgPreview, setpgImgPreview] = useState([]);
//   const [images, setImages] = useState([]);

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   //   reset,
//   // } = useForm();

//   // /////////////////////////////////for facilities//////////////////////////////////////////

//   const [facFields, setfacFields] = useState([""]);

//   const handleAddfacField = () => {
//     setfacFields([...facFields, ""]);
//   };

//   const handleRemovefacField = (index) => {
//     const updatedFields = [...facFields];
//     updatedFields.splice(index, 1);
//     setfacFields(updatedFields);
//   };

//   const handlefacFieldChange = (index, value) => {
//     const updatedFields = [...facFields];
//     updatedFields[index] = value;
//     setfacFields(updatedFields);
//   };

//   // /////////////////////////////////////////////////////////////////////////////////////////////////////////

//   // //////////////////////////////////for prices/////////////////////////////////////////////////////////////
//   const [pricesFields, setpricesFields] = useState([""]);

//   const handleAddpricesField = () => {
//     setpricesFields([...pricesFields, ""]);
//   };

//   const handleRemovepricesField = (index) => {
//     const updatedFields = [...pricesFields];
//     updatedFields.splice(index, 1);
//     setpricesFields(updatedFields);
//   };

//   const handlepricesFieldChange = (index, value) => {
//     const updatedFields = [...pricesFields];
//     updatedFields[index] = value;
//     setpricesFields(updatedFields);
//   };

//   /////////////////////////////////////////on submit///////////////////////////////////////////////////////////////

//   // const onSubmit = async (data) => {
//   //   try {
//   //     const { pgImg, ...rest } = data;
//   //     const pgImgFile = pgImg.length ? pgImg[0] : null;

//   //     const pgData = new FormData();

//   //     pgData.append("pgName", data.pgName);
//   //     pgData.append("ownerName", data.ownerName);
//   //     pgData.append("contactNumber", data.contactNumber);
//   //     pgData.append("furnishing", data.furnishing);
//   //     pgData.append("address", data.address);
//   //     pgData.append("occupancyType", data.occupancyType);
//   //     pgData.append("tenantType", data.tenantType);
//   //     pgData.append("noticePeriod", data.noticePeriod);

//   //     pgData.append("price", JSON.stringify(pricesFields));
//   //     pgData.append("facilities", JSON.stringify(facFields));

//   //     images.forEach((image) => {
//   //       pgData.append("pgImg", image);
//   //     });

//   //     //   const pgData = {
//   //     //     ...rest,
//   //     //     pgImage: pgImgFile,
//   //     //     prices: JSON.stringify(pricesFields),
//   //     //     facility: JSON.stringify(facFields),
//   //     //   };
//   //     const response = await dispatch(addPg(pgData));
//   //     console.log(data);
//   //     if (response && response.payload && response.payload.success) {
//   //       window.alert("Pg Added Successfully");
//   //     }
//   //     reset();
//   //   } catch (error) {
//   //     throw Error(error.message);
//   //   }
//   // };

//   // useEffect(() => {
//   //   try {
//   //     dispatch(getAllPg());
//   //   } catch (error) {
//   //     throw new Error(error.message);
//   //   }
//   // }, [dispatch]);

//   // useEffect(() => {
//   //   if (error) {
//   //     window.alert(error);
//   //   }
//   // }, [error]);

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Container>
//         <Grid>
//           {/* <div> */}
//           <form
//             // onSubmit={handleSubmit(onSubmit)}
//             method="post"
//             encType="multipart/form-data"
//           >
//             <Grid>
//               <Typography
//                 component="h1"
//                 variant="h5"
//                 align="center"
//                 fontSize={35}
//                 padding={3}
//               >
//                 Fill the PG Details
//               </Typography>
//             </Grid>

//             <Container maxWidth="md" align="center">
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item xs={12} sm={12}>
//                   <TextField
//                     fullWidth
//                     // {...register("pgName", { required: true })}
//                     id="pgName"
//                     label="Enter Your Pg Name"
//                     required
//                     color="success"
//                   />
//                   {/* {errors.pgName && <span>*required field</span>} */}
//                 </Grid>

//                 <Grid item xs={12} sm={12}>
//                   <TextField
//                     fullWidth
//                     // {...register("ownerName", { required: true })}
//                     id="ownerName"
//                     required
//                     label="Enter Owner Name"
//                     color="success"
//                     margin="normal"
//                   />
//                   {/* {errors.ownerName && <span>*required field</span>} */}
//                 </Grid>

//                 <Grid item xs={12} sm={12}>
//                   <TextField
//                     type="number"
//                     label="Contact Number"
//                     id="contactNumber"
//                     // {...register("contactNumber", { required: true })}
//                     required
//                     fullWidth
//                   />
//                   {/* {errors.contactNumber && <span>*required field</span>} */}
//                 </Grid>

//                 <Grid item xs={12} sm={12}>
//                   {pricesFields.map((field, index) => (
//                     <div key={index}>
//                       <Button
//                         type="Button"
//                         sx={{ mt: 3, mb: 2 }}
//                         onClick={() => handleRemovepricesField(index)}
//                         hidden={index === 0 ? true : false}
//                       >
//                         Remove
//                       </Button>
//                       <TextField
//                         type="number"
//                         name="price"
//                         id="price"
//                         label="Price"
//                         value={field}
//                         onChange={(e) =>
//                           handlepricesFieldChange(index, e.target.value)
//                         }
//                         required
//                         fullWidth
//                       />
//                     </div>
//                   ))}
//                   <Button
//                     type="Button"
//                     sx={{ border: "1px solid red", my: "1em" }}
//                     onClick={handleAddpricesField}
//                   >
//                     Add Price
//                   </Button>
//                 </Grid>

//                 <Grid item xs={12} sm={12}>
//                   {/* {facFields.map((field, index) => (
//                     <div key={index}>
//                       <Button
//                         type="Button"
//                         sx={{ mt: 3, mb: 2 }}
//                         onClick={() => handleRemovefacField(index)}
//                         hidden={index === 0 ? true : false}
//                       >
//                         Remove
//                       </Button>
//                       <TextField
//                         value={field}
//                         onChange={(e) =>
//                           handlefacFieldChange(index, e.target.value)
//                         }
//                         required
//                         label="Facility"
//                         color="success"
//                         helperText="Please Enter Facility"
//                       />
//                     </div>
//                   ))} */}
//                   <section class="sec">
//                   <div class="container">
//                       {Facilities.map((text) => (
//                     <div>
//                           <label class="checkbox-button" for={text} >
//                             <input
                            
//                               type="checkbox"
//                               // name="sports"
//                               id={text}
//                             />
//                             <span>{text}</span>
//                           </label>
//                     </div>
//                       ))}
//                       </div>
//                       </section>
//                     <Button
//                       type="Button"
//                       sx={{ border: "1px solid red", my: "1em" }}
//                       onClick={handleAddfacField}
//                     >
//                       Add Facility
//                     </Button>
//                 </Grid>

//                 <Grid item xs={12} sm={12}>
//                   <div className="main-container">
//                     <label class="heading" htmlFor="furnishing">
//                       Furnishing
//                     </label>
//                     <div class="radio-buttons">
//                       <label htmlFor="furnished" class="custom-radio">
//                         <input
//                           type="radio"
//                           name="furnished"
//                           id="furnished"
//                           value="Furnished"
//                           required
//                           checked
//                           // {...register("furnishing")}
//                         />
//                         <span class="radio-btn">
//                           <div class="hobbies-icon">
//                             <h3
//                               style={{
//                                 fontSize: "0.9rem",
//                               }}
//                             >
//                               Furnished
//                             </h3>
//                           </div>
//                         </span>
//                       </label>
//                       <label htmlFor="semi-furnished" class="custom-radio">
//                         <input
//                           type="radio"
//                           name="semi-furnished"
//                           id="semi-furnished"
//                           value="Semi-Furnished"
//                           required
//                           checked
//                           // {...register("furnishing")}
//                         />
//                         <span class="radio-btn">
//                           <div class="hobbies-icon">
//                             <h3>Semi Furnished</h3>
//                           </div>
//                         </span>
//                       </label>
//                       <label htmlFor="non-furnished" class="custom-radio">
//                         <input
//                           type="radio"
//                           name="non-furnished"
//                           id="non-furnished"
//                           value="Non-Furnished"
//                           required
//                           checked
//                           // {...register("furnishing")}
//                         />
//                         <span class="radio-btn">
//                           <div class="hobbies-icon">
//                             <h3>UnFurnished</h3>
//                           </div>
//                         </span>
//                       </label>
//                     </div>
//                   </div>
//                 </Grid>

//                 <Grid item xs={12} sm={12}>
//                   <TextField
//                     type="number"
//                     name="noticePeriod"
//                     id="noticePeriod"
//                     // {...register("noticePeriod", { required: true })}
//                   />
//                   {/* {errors.noticePeriod && <span>*required field</span>} */}
//                 </Grid>

//                 <Grid item xs={12} sm={12}>
//                   <TextField
//                     fullWidth
//                     // {...register("address", { required: true })}
//                     id="address"
//                     label="Address"
//                     required
//                     color="success"
//                     helperText="Please Enter your Address"
//                   />
//                   {/* {errors.address && <span>*required field</span>} */}
//                 </Grid>

//                 <Grid item xs={12} sm={8}>
//                   <label htmlFor="occupancyType">Occupancy Type</label>
//                   <label htmlFor="singleRoom">
//                     <TextField
//                       style={{ margin: "1rem" }}
//                       type="Radio"
//                       name="singleRoom"
//                       id="singleRoom"
//                       value="Single Room"
//                       // {...register("occupancyType")}
//                     />
//                     Single Room
//                   </label>
//                   <label htmlFor="doubleSharing">
//                     <TextField
//                       style={{ margin: "1rem" }}
//                       type="Radio"
//                       name="doubleSharing"
//                       id="doubleSharing"
//                       value="Double Sharing"
//                       // {...register("occupancyType")}
//                     />
//                     Double Sharing Room
//                   </label>
//                   <label htmlFor="tripleSharing">
//                     <TextField
//                       style={{ margin: "1rem" }}
//                       type="Radio"
//                       name="tripleSharing"
//                       id="tripleSharing"
//                       value="Triple Sharing"
//                       // {...register("occupancyType")}
//                     />
//                     Triple Sharing Room
//                   </label>
//                 </Grid>

//                 <Grid item xs={12} sm={12}>
//                   <div className="main-container">
//                     <label class="heading" htmlFor="tenantType">
//                       Tenant Type
//                     </label>
//                     <div class="radio-buttons">
//                       <label htmlFor="boys" class="custom-radio">
//                         <input
//                           type="radio"
//                           name="Boys"
//                           id="boys"
//                           value="Boys"
                        
//                           // {...register("tenantType", { required: true })}
//                         />
//                         <span class="radio-btn">
//                           <div class="hobbies-icon">
//                             <Man2RoundedIcon
//                               style={{
//                                 color: "black",
//                                 lineHeight: "80px",
//                               }}
//                               fontSize="large"
//                             />
//                             <h3>Boys</h3>
//                           </div>
//                         </span>
//                       </label>
//                       <label htmlFor="girls" class="custom-radio">
//                         <input
//                           type="radio"
//                           name="girls"
//                           id="girls"
//                           value="Girls"
//                           onClick={(e) => console.log(e.target.value)}
                       
//                           // {...register("tenantType", { required: true })}
//                         />
//                         <span class="radio-btn">
//                           <div class="hobbies-icon">
//                             <WomanRoundedIcon
//                               style={{
//                                 color: "black",
//                                 lineHeight: "80px",
//                               }}
//                               fontSize="large"
//                             />
//                             <h3>Girls</h3>
//                           </div>
//                         </span>
//                       </label>
//                       <label htmlFor="others" class="custom-radio">
//                         <input
//                           type="radio"
//                           name="others"
//                           id="others"
//                           value="Others"
                      
//                           // {...register("tenantType", { required: true })}
//                         />
//                         <span class="radio-btn">
//                           <div class="hobbies-icon">
//                             <WcRoundedIcon
//                               style={{
//                                 color: "black",
//                                 lineHeight: "80px",
//                               }}
//                               fontSize="large"
//                             />
//                             <h3>Both</h3>
//                           </div>
//                         </span>
//                       </label>
//                     </div>
//                     {/* <label htmlFor="others">
//                       <TextField
//                         style={{ margin: "1rem" }}
//                         type="Radio"
//                         name="others"
//                         id="others"
//                         value="Others"
//                         required
//                         {...register("tenantType", { required: true })}
//                       />
//                       Both
//                     </label> */}
//                     {/* {errors.tenantType && <span>*required field</span>} */}
//                   </div>
//                 </Grid>

//                 <label htmlFor="pgImages" class="heading">
//                   PG Images
//                 </label>
//                 <Grid item xs={12} sm={12}>
//                   <Button type="button" variant="filled" class="btn-warning">
//                     <FileUploadOutlinedIcon />
//                     Upload Images
//                     <input
//                       required
//                       style={{ margin: "1rem" }}
//                       type="file"
//                       name="pgImg"
//                       id="pgImg"
//                       accept="image/*"
//                       multiple
//                       // {...register("pgImg", { required: true })}
//                       onChange={(e) => {
//                         const files = Array.from(e.target.files);

//                         setImages([]);
//                         setpgImgPreview([]);

//                         files.forEach((file) => {
//                           const reader = new FileReader();

//                           reader.onload = () => {
//                             if (reader.readyState === 2) {
//                               setpgImgPreview((old) => [...old, reader.result]);
//                               setImages((old) => [...old, reader.result]);
//                             }
//                           };

//                           reader.readAsDataURL(file);
//                         });
//                       }}
//                     />
//                   </Button>
//                   {/* {errors.pgImg && <span>*required field</span>} */}
//                   <Grid item xs={12} sm={12}>
//                     <Grid container spacing={1} justifyContent="center">
//                       {pgImgPreview.map((image, index) => (
//                         <img
//                           style={{
//                             width: "10rem",
//                             height: "10rem",
//                             marginTop: "2rem",
//                             marginRight: "2rem",
//                             border: "0.2rem solid black",
//                             borderRadius: "2rem",
//                           }}
//                           key={index}
//                           src={image}
//                           alt="Preview"
//                         />
//                       ))}
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Container>
//             <Button variant="contained" type="submit">
//               Submit
//             </Button>
//           </form>
//           {/* </div> */}
//         </Grid>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default NewPg;
