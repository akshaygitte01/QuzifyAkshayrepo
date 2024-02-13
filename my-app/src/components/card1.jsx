import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex',width:'300px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column',alignItems:'center' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Quiz Examiner
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Button variant="contained" style={{ width: '100px', marginBottom:'15px' }}>Contained</Button>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://site.surveysparrow.com/wp-content/uploads/2022/03/Copy-of-Blog-Banner-Templates-23.png"
        alt="Live from space album cover"
      />
    </Card>
  );
}