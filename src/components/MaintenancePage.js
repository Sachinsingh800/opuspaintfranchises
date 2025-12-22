// import React from 'react';
// import { 
//   Container, 
//   Typography, 
//   Box, 
//   CircularProgress,
//   Paper,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import { ConstructionOutlined } from '@mui/icons-material';

// const MaintenancePage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Container 
//       component="main" 
//       maxWidth="sm"
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}
//     >
//       <Paper
//         elevation={24}
//         sx={{
//           p: 4,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           textAlign: 'center',
//           borderRadius: 4,
//           background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`
//         }}
//       >
//         <ConstructionOutlined
//           sx={{
//             fontSize: isMobile ? 64 : 96,
//             color: theme.palette.primary.main,
//             mb: 2
//           }}
//         />
        
//         <Typography
//           variant={isMobile ? "h4" : "h3"}
//           component="h1"
//           gutterBottom
//           color="primary"
//           fontWeight="bold"
//         >
//           Under Maintenance
//         </Typography>
        
//         <Typography
//           variant={isMobile ? "body1" : "h6"}
//           color="text.secondary"
//           sx={{ mb: 4 }}
//         >
//           We're performing some maintenance at the moment. We'll be back up and running shortly.
//         </Typography>
        
//         <Box sx={{ position: 'relative', display: 'inline-flex', mb: 4 }}>
//           <CircularProgress
//             size={isMobile ? 60 : 80}
//             thickness={4}
//             sx={{
//               color: theme.palette.primary.main,
//               animationDuration: '2.5s'
//             }}
//           />
//         </Box>
        
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{ fontStyle: 'italic' }}
//         >
//           Thank you for your patience
//         </Typography>
//       </Paper>
//     </Container>
//   );
// };

// export default MaintenancePage;