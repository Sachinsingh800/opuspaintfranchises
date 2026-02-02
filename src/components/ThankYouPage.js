import React from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ThankYouPage = () => {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "100vh",
          pt: { xs: 10, sm: 12 }, // space for navbar
          pb: { xs: 6, sm: 8 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, #e0f2fe 0%, #ffffff 40%, #eef2ff 100%)",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 4,
              px: { xs: 3, sm: 6 },
              py: { xs: 4, sm: 6 },
              textAlign: "center",
              boxShadow:
                "0 18px 45px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(226, 232, 240, 0.9)",
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                mx: "auto",
                mb: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "success.light",
              }}
            >
              <CheckCircleIcon
                sx={{
                  fontSize: 48,
                  color: "success.main",
                }}
              />
            </Box>

            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "primary.main",
                fontSize: { xs: "1.9rem", sm: "2.3rem" },
              }}
            >
              Thank you for applying!
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 500,
                mb: 2,
                color: "text.primary",
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
              }}
            >
              Your application has been submitted successfully.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem" },
                lineHeight: 1.7,
                color: "text.secondary",
                mb: 4,
                maxWidth: 640,
                mx: "auto",
              }}
            >
              Thank you for expressing interest in partnering with{" "}
              <strong>contact@birlaopuspaintsfranchises.com</strong>. Our team will
              review your details and reach out within 3–5 business days with
              the next steps.
              <br />
              <br />
              Until then, feel free to explore our colour ideas, products, and
              dealer stories to get inspired for your next project.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/"
                startIcon={<ArrowBackIcon />}
                sx={{
                  px: 4,
                  py: 1.3,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  boxShadow: 2,
                  "&:hover": {
                    boxShadow: 4,
                  },
                }}
              >
                Back to home
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default ThankYouPage;
