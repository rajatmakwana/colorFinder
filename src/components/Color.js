import React from 'react';
import { Card, CardActionArea, Typography, } from '@material-ui/core';
import useStyles from './styles';

const Color = ({ color }) => {
    const classes = useStyles();

    return (
        <Card
            className={classes.card}
            style={{ backgroundColor: color.hex }}
        >
            <CardActionArea target="_blank">
                <Typography
                    style={{
                        color: '#000',
                        fontSize: '1.5em',
                        paddingLeft: '5px',
                        margin: '0',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)'
                    }}
                    className={classes.title}
                    variant="body2"
                    component="h5"
                >
                    {color.hex}
                </Typography>
            </CardActionArea>
        </Card>
    )
}

export default Color;