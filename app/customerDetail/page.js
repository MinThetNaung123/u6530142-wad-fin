'use client';
import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material'; // Using Material UI components for better layout

export default function CustomerDetail() {
  const [customer, setCustomer] = useState({
    code: '',
    name: '',
    description: '',
    dateOfBirth: '',
    memberNumber: '',
    interests: '',
  });

  useEffect(() => {
    // Optionally, fetch customer data from localStorage or API
    const storedCustomer = JSON.parse(localStorage.getItem('customer')); // Example
    if (storedCustomer) {
      setCustomer(storedCustomer);
    }
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Customer Detail
      </Typography>
      
      <Grid container spacing={2}>
        {/* Column 1: Headers */}
        <Grid item xs={4}>
          <Typography variant="body1"><strong>Code:</strong></Typography>
          <Typography variant="body1"><strong>Name:</strong></Typography>
          <Typography variant="body1"><strong>Description:</strong></Typography>
          <Typography variant="body1"><strong>Date of Birth:</strong></Typography>
          <Typography variant="body1"><strong>Member Number:</strong></Typography>
          <Typography variant="body1"><strong>Interests:</strong></Typography>
        </Grid>

        {/* Column 2: Customer Data */}
        <Grid item xs={8}>
          <Typography variant="body1">{customer.code}</Typography>
          <Typography variant="body1">{customer.name}</Typography>
          <Typography variant="body1">{customer.description}</Typography>
          <Typography variant="body1">{customer.dateOfBirth}</Typography>
          <Typography variant="body1">{customer.memberNumber}</Typography>
          <Typography variant="body1">{customer.interests}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
