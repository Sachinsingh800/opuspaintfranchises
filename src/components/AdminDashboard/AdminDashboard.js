import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Alert,
  styled,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import LogoutIcon from "@mui/icons-material/Logout";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../firebase";
import UserDetailsDialog from "./UserDetailsDialog";

const AdminContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#f0f2f5",
}));

const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  marginBottom: theme.spacing(4),
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: "-0.5px",
  flexGrow: 1,
  color: theme.palette.common.black,
}));

const LoadingContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const LogoutButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  borderColor: theme.palette.grey[400],
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
    borderColor: theme.palette.grey[600],
  },
}));

export const formatTimestamp = (timestamp) => {
  if (!timestamp) return "N/A";
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function AdminDashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (row) => {
    setSelectedUser(row);
  };

  useEffect(() => {
    const adminToken = Cookies.get("adminToken");
    if (!adminToken) {
      navigate("/admin");
    }
  }, [navigate]);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "phone",
      headerName: "Contact",
      flex: 1,
      minWidth: 120,
      hide: isMobile,
    },
    {
      field: "businessType",
      headerName: "Business Type",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "investment",
      headerName: "Investment",
      flex: 1,
      minWidth: 150,
      hide: isMobile,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "timestamp",
      headerName: "Date Applied",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => formatTimestamp(params.row.timestamp),
    },
  ];

  useEffect(() => {
    const db = getDatabase(app);
    const applicationsRef = ref(db, "applications");

    const unsubscribe = onValue(
      applicationsRef,
      (snapshot) => {
        try {
          const data = snapshot.val();
          const applicationsData = [];

          if (data) {
            Object.entries(data).forEach(([key, entry]) => {
              if (entry && typeof entry === "object") {
                applicationsData.push({
                  id: key,
                  name: entry.name || "N/A",
                  email: entry.email || "",
                  phone: entry.phone || "",
                  businessType: entry.businessType || "N/A",
                  investment: entry.investment || "N/A",
                  city: entry.city || "N/A",
                  state: entry.state || "N/A",
                  timestamp: entry.timestamp || null,
                });
              }
            });
          }

          setApplications(applicationsData);
          setLoading(false);
        } catch (err) {
          setError("Failed to process applications data");
          setLoading(false);
          console.error("Data processing error:", err);
        }
      },
      (error) => {
        setError("Failed to fetch applications: " + error.message);
        setLoading(false);
        console.error("Firebase read error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    Cookies.remove("adminToken");
    navigate("/admin");
  };

  if (!Cookies.get("adminToken")) return null;

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress size={60} />
      </LoadingContainer>
    );
  }

  return (
    <AdminContainer>
      <Header position="static">
        <Toolbar>
          <Logo variant="h6">Admin Dashboard</Logo>
          <LogoutButton
            variant="outlined"
            startIcon={<LogoutIcon sx={{ color: theme.palette.common.black }} />}
            onClick={handleLogout}
          >
            {!isMobile && "Logout"}
          </LogoutButton>
        </Toolbar>
      </Header>

      <Box
        sx={{
          flex: 1,
          p: theme.spacing(4),
          [theme.breakpoints.down("sm")]: {
            p: theme.spacing(2),
          },
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 700 }}>
          Applications
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box
          sx={{
            height: "70vh",
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <DataGrid
            rows={applications}
            columns={columns}
            onRowClick={(params) => handleRowClick(params.row)}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10, page: 0 },
              },
            }}
            pageSizeOptions={[10, 25, 50]}
          />
        </Box>
      </Box>
      <UserDetailsDialog
        open={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        userData={selectedUser}
      />
    </AdminContainer>
  );
}