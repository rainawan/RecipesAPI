import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CharacterCard(props) {
  console.log("props", props)
  return (
    <Card>
      <CardMedia
        component="img"
        height="350px"
        image={props.image}
      />
      <CardHeader
        title={props.name}
        titleTypographyProps={{ align: 'center' }}
        sx={{ mt: 1 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <ul>
          {props.descriptionArray.map((sentence) => 
          <Typography component="li">
            {sentence}
          </Typography>
          )} 
        </ul>
      </CardContent>
      <CardActions>
        <Button 
          variant="contained"
          sx={{ px: 6, mx: 'auto' }}
        >
          Vote
        </Button>
      </CardActions>
    </Card>
  );
}