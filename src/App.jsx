import './App.css'
import { Typography, Container, Box, Grid } from "@mui/material";
import { Route, Routes, Link } from 'react-router-dom';

import Trekking from '../Pages/Trekking';
import RockClimbing from '../Pages/RockClimbing';

import styled from "@emotion/styled";

const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontWeight: 600, 
  transition: "all 0.2s ease-in-out",
  fontSize: "18px",
  [theme.breakpoints.up("xs")]: { fontSize: "18px" },
  [theme.breakpoints.up("sm")]: { fontSize: "20px" },
  [theme.breakpoints.up("md")]: { fontSize: "24px" },
  [theme.breakpoints.up("lg")]: { fontSize: "30px" },
  "&:hover": {
    color: "blue",
  },
  "&active": {
    color: "blue",
    transition:"scale(0.95)",
  },
}))


function App() {
  return (
    <Box>
      <Typography variant="h3" color="primary" fontWeight="bold" textAlign="center" mt={3}>Climb India</Typography>
      <Container mt={2} sx={{textAlign:"center"}}>
                  <Grid container width="100%" display="flex" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                    {/* Column 1 */}
              <Grid size={{ lg:3, sm:5,md:6,xs:6}}>
                <CustomLink to="#" variant="h6" sx={{
                  textDecoration: "none", color: "inherit", cursor: 'pointer',}}> Mountaineering </CustomLink>
                    </Grid>
                    {/* Column 2 */}
              <Grid size={{ lg: 3, sm: 5, md: 6, xs: 6 }} >
                      <CustomLink to="/" variant="h6" sx={{ textDecoration: "none", color: "inherit", cursor: 'pointer' }}> Trekking </CustomLink>
                    </Grid>
                    {/* Column 3 */}
              <Grid size={{ lg: 3, sm: 5, md: 6, xs: 6 }} >
                      <CustomLink to="/rock-climbing" variant="h6" sx={{ textDecoration: "none", color: "inherit", cursor: 'pointer' }} > Rock Climbing </CustomLink>
                    </Grid>
                    {/* Column 4 */}
              <Grid size={{ lg: 3, sm: 5, md: 6, xs: 6 }}>
                      <CustomLink to="#" variant="h6" sx={{ textDecoration: "none", color: "inherit", cursor: 'pointer' }}> Sport Climbing </CustomLink>
                    </Grid>
                  </Grid>
      </Container>
      <Routes>
    
        <Route path="/" element={<Trekking />} />
        <Route path="/rock-climbing" element={<RockClimbing />} />

      </Routes>
    </Box>
  )
}

export default App;
