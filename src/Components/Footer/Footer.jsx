import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.dark", color: "common.white", py: 6, mt: 10 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body2">
              This platform helps students with hostel room bookings and
              complaint submissions, simplifying campus life.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email:{" "}
              <Link
                href="mailto:hostelhelp@university.edu"
                color="inherit"
                underline="hover"
              >
                hostelhelp@university.edu
              </Link>
            </Typography>
            <Typography variant="body2">
              Phone:{" "}
              <Link href="tel:+919876543210" color="inherit" underline="hover">
                +91 98765 43210
              </Link>
            </Typography>
          </Grid>

          {/* Copyright Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-end" },
            }}
          >
            <Typography variant="body2">
              &copy; {currentYear} HostelManager
            </Typography>
            <Typography variant="body2">All rights reserved.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
