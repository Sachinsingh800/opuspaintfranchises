import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ConnectFormSection from "./ConnectFormSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "radial-gradient(circle at top left, rgba(246, 215, 122, 0.18) 0%, transparent 55%)," +
          "radial-gradient(circle at bottom right, rgba(15, 15, 15, 0.25) 0%, transparent 60%)," +
          "linear-gradient(135deg, #050816 0%, #0b1020 45%, #050816 100%)"
      }}
    >
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          py: { xs: 6, md: 8 }
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1.1,
              background:
                "linear-gradient(135deg, #e5e7eb, #facc15)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: "#cbd5f5",
              fontWeight: 400
            }}
          >
            Get in touch with our team
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: 3,
            p: { xs: 2.5, md: 3 },
            background:
              "radial-gradient(circle at top left, rgba(248, 250, 252, 0.12) 0%, rgba(15, 23, 42, 0.95) 45%)",
            border: "1px solid rgba(148, 163, 184, 0.45)",
            boxShadow: "0 18px 60px rgba(0, 0, 0, 0.6)"
          }}
        >
          <ConnectFormSection />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Contact;
