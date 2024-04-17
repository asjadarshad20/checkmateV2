import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function NewBasicCard({ onDeleteCard, item }) {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  

  return (
    <Box sx={{ width: '100%', marginBottom: '16px' }}> {/* Add marginBottom for spacing */}
      <Card>
        <CardContent>
          <Typography variant="body1">
            <FormControlLabel
              control={<Checkbox checked={completed} onChange={handleCheckboxChange} />}
            />
            {item.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onDeleteCard}>Delete</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
