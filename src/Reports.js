import React, { useState } from 'react';
import { Typography, Box, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Reports() {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState('all');
  const [timePeriod, setTimePeriod] = useState('weekly');

  const handleViewReports = () => {
    // TODO: Implement chart generation logic here
    alert('ReportViewing is under development. Please check back later.');
  };
  
  
  const handleGenerateCharts = () => {
    // TODO: Implement chart generation logic here
    alert('Chart generation is under development. Please check back later.');
  };

  const handleDownloadReports = () => {
    // TODO: Implement report download logic here
    alert('Report download is under development. Please check back later.');
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Reports
      </Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel id="filter-type-label">Filter By</InputLabel>
        <Select
          labelId="filter-type-label"
          id="filter-type"
          value={filterType}
          label="Filter By"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="urgency">Urgency</MenuItem>
          <MenuItem value="importance">Importance</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="time-period-label">Time Period</InputLabel>
        <Select
          labelId="time-period-label"
          id="time-period"
          value={timePeriod}
          label="Time Period"
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="quarterly">Quarterly</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>

        <Button variant="contained" color="primary" onClick={handleViewReports}> 
          View
        </Button>

        <Button variant="contained" color="primary" onClick={handleGenerateCharts}>
          Charts
        </Button>

        <Button variant="contained" color="primary" onClick={handleDownloadReports}>
          Download Reports
        </Button>

        
      </Box>

      <Button variant="contained" onClick={() => navigate('/home')}>
        Back to Home
      </Button>
    </Box>
  );
}

export default Reports;
