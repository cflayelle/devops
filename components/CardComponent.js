import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = (props) => {
    return (
        <Card className={props.bgColor} sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div" className={'text-white'}>
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions>
                <a size="small" className={'text-white'}>Learn More</a>
            </CardActions>
        </Card>
    );
}

export default CardComponent;