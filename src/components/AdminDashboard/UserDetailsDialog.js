import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { formatTimestamp } from "./AdminDashboard";

const UserDetailsDialog = ({ open, onClose, userData }) => {
  const theme = useTheme();

  if (!userData) return null;

  const Section = ({ title, children }) => (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: theme.palette.text.primary,
          mb: 2,
          pb: 1,
          borderBottom: `2px solid ${theme.palette.divider}`,
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Box>
  );

  const DetailItem = ({ label, value }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={{ mb: 1 }}>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            color: theme.palette.text.secondary,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 500,
            wordBreak: "break-word",
            mt: 0.5,
          }}
        >
          {value || "—"}
        </Typography>
      </Box>
    </Grid>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: theme.shadows[5],
        },
      }}
    >
      <DialogTitle
        sx={{
          bgcolor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 3,
          px: 4,
        }}
      >
        <Typography variant="h5" component="div" fontWeight={600}>
          User Details
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ p: 4 }}>
        {/* Personal Information Section */}
        <Section title="Personal Information">
          <DetailItem label="Full Name" value={userData.name} />
          <DetailItem label="Email Address" value={userData.email} />
          <DetailItem label="Contact Number" value={userData.phone} />
        </Section>

        {/* Business Details Section */}
        <Section title="Business Details">
          <DetailItem label="Business Type" value={userData.businessType} />
          <DetailItem label="Investment Range" value={userData.investment} />
        </Section>

        {/* Location Details Section */}
        <Section title="Location Details">
          <DetailItem label="City" value={userData.city} />
          <DetailItem label="State/Province" value={userData.state} />
        </Section>

        {/* Application Date */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>📅</span>
            Application Submitted: {formatTimestamp(userData.timestamp)}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          px: 4,
          py: 3,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            minWidth: 120,
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 1,
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailsDialog;