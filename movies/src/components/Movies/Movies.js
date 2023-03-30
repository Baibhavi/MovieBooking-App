import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { getAllMovies } from '../../api-helper/api-helpers'
import MovieItems from './MovieItems'
const Movies = () => {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies)).catch((err)=>console.log(" no data found"))
  }
  ,[])
  
 
  return (
    <Box margin={"auto"} marginTop={4}>
  <Typography 
  variant='h4' 
  padding={2} 
  textAlign='center' 
  bgcolor={'#900C3F'} 
  width="40%" 
  color="white" 
  margin={"auto"}>
    All Movies
  </Typography>
  <Box 
  width={'100%'} 
  margin={'auto'} 
  marginTop='5' 
  display={"flex"} 
  justifyContent="flex-start" 
  flexWrap={"wrap"}>
    {movies.map((item,idex)=> (
      <MovieItems id={item._id} title={item.title} posterUrl={item.posterUrl} releaseDate={item.releaseDate} key={idex}/>
    ))}
    {/* {movies && movies.slice(0,10).map((movie, index) => <MovieItems 
    id={movie._id} 
    title={movie.title} 
    posterUrl={movie.posterUrl} 
    releaseDate={movie.releaseDate} 
    key={index} />)} */}
  </Box>
    </Box>
  )
}

export default Movies