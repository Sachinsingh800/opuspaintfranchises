import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ConnectFormSection from "./ConnectFormSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary" 
            sx={{ mb: 4 }}
          >
            Get in touch with our team
          </Typography>
        </Box>
        <ConnectFormSection />
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;