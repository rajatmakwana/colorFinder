import React, { useState } from 'react'
import useStyles from './styles.js'
import TextField from '@material-ui/core/TextField';
import Color from './components/Color';
import { Grid, Grow } from '@material-ui/core';
import './index.css';

const API = "https://api.color.pizza/v1/names/?name="

const COLOR_LIMIT = 100; // Set the intial number for list of hex color

const App = () => {

    const [inputColor, setInputColor] = useState('');
    const [colors, setColors] = useState([]);

    const getSetColor = (e) => {
        const val = e.target.value;
        let typingTimer;
        setInputColor(val);

        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            if (val !== '' && val.length > 2) {
                fetchColor(val);
            }
        }, 1000);
    }

    const fetchColor = (color) => {
        fetch(`${API}${color}`)
            .then(status => status.json())
            .then(resp => {
                setColors(resp.colors && resp.colors.length > 0 && resp.colors.slice(0, COLOR_LIMIT).sort((a, b) => {
                    if (a.hex < b.hex) {
                        return -1;
                    } else if (a.hex > b.hex) {
                        return 1;
                    } else {
                        return 0;
                    }
                }))

            })
    }

    const classes = useStyles();

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginBottom: '10px' }}>
                <TextField
                    inputProps={{ min: 0, style: { textAlign: 'center', justifyContent: "center", fontSize: '1.5em' } }}
                    className={classes.input}
                    id="standard-basic"
                    label="Search the color"
                    value={inputColor}
                    onChange={getSetColor}
                    autoFocus />
            </div>

            <Grow in>
                <Grid key={Math.random()} className={classes.container} container alignItems="center" spacing={2} >
                    {colors && colors.map(color => (
                        <Grid item xs={4} sm={3} md={2} lg={2} style={{ display: 'grid' }}>
                            <Color color={color} key={Math.random()} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </>
    )
}

export default App;
