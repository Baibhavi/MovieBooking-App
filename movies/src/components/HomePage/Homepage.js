import { Box, Button, Typography } from '@mui/material'
// import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MovieItems from '../Movies/MovieItems'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../../api-helper/api-helpers'

const Homepage = () => {
   const [movies, setMovies] = useState([]);
   useEffect(()=>{
      getAllMovies().then((data)=>setMovies(data.movies)).catch((err)=>console.log(err));
   },[])
   console.log(movies);
  return (
 <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
 <Box margin={"auto"} width="35%" height={"70vh"} padding={2}>
    <img src='https://w0.peakpx.com/wallpaper/144/660/HD-wallpaper-official-spider-man-no-way-home-poster.jpg' alt='Spider-Man: No way home' width={'100%'} height={'100%'}/>
 </Box>



{/* Typhography for the text */}

 <Box padding={5} margin="auto">
    <Typography variant='h4' textAlign={"center"}>  
    Latest Realse
    </Typography>
 </Box>



 {/* <Box display={"flex"} margin="auto" width="80%" justifyContent={"center"} flexWrap="wrap">
 {movies && movies.slice(0,4).map((item,index)=>
  <MovieItems id={item.id} title={item.title} posterUrl={item.posterUrl} releaseDate={item.releaseDate} key={index}/>
  )}

 </Box> */}
<Box sx={{display:'flex', width:"100%", flexDirection:'row', alignItems:'center', justifyContent:"center", flexWrap:"wrap"}}>
{movies && movies.slice(0,4).map((movie, index) => <MovieItems 
id={movie.id} 
title={movie.title} 
posterUrl={movie.posterUrl} 
releaseDate={movie.releaseDate} 
key={index} />)}
</Box>

 <Box display="flex" padding={5} margin="auto">
 <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{margin:"auto", color:"#2b2d42"}}> View All Movies </Button>

 </Box>
 </Box>
  )
}

export default Homepage
