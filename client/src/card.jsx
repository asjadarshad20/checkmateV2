import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function BasicCard({ onDeleteCard }) {
  const [completed, setCompleted] = useState(false);
  const [task, setTask] = useState(''); // State for the task string

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Card>
        <CardContent>
          <Typography variant="body1">
            <FormControlLabel
              control={<Checkbox checked={completed} onChange={handleCheckboxChange} />}
              label={
                <TextField
                  value={task}
                  onChange={handleTaskChange}
                  placeholder="Enter your task"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              }
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onDeleteCard}>Delete</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
