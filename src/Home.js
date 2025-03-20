import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home({ supabase, isAdmin }) {
  console.log('isAdmin in Home.js:', isAdmin);
  return (
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f8f8ff' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome Home!
      </Typography>
      <Button component={Link} to="/fund-request" variant="contained" sx={{ mb: 2 }}>
        Raise Fund Request
      </Button>
      {isAdmin && (
        <Button component={Link} to="/admin-approval" variant="contained" sx={{ mb: 2 }}>
          Admin Approval
        </Button>
      )}
      <Button component={Link} to="/notifications" variant="contained" sx={{ mb: 2 }}>
        Notifications
      </Button>
      <Button component={Link} to="/reports" variant="contained" sx={{ mb: 2 }}>
        Reports
      </Button>
      <Button component={Link} to="/appointment-scheduler" variant="contained" sx={{ mb: 2 }}>
        Appointment Scheduler
      </Button>
      <Button component={Link} to="/" variant="contained" sx={{ mb: 2 }} onClick={() => supabase.auth.signOut()}>
        Sign Out
      </Button>
    </Box>
  );
}

export default Home;
