import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ProfilePage() {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mb: 3,
            }}
          >
            <Avatar
              sx={{ bgcolor: "primary.main", width: 80, height: 80, mb: 2 }}
            >
              <AccountCircleIcon sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography variant="h5" component="h1" gutterBottom>
              {auth?.name || "Student Name"}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {auth?.role || "Student"}
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Enrollment Number
              </Typography>
              <Typography variant="body1">
                {auth?.enrollmentNumber || "-"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Email
              </Typography>
              <Typography variant="body1">{auth?.email || "-"}</Typography>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Phone
              </Typography>
              <Typography variant="body1">{auth?.phone || "N/A"}</Typography>
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Joined On
              </Typography>
              <Typography variant="body1">
                {auth?.createdAt
                  ? new Date(auth.createdAt).toLocaleDateString()
                  : "-"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
