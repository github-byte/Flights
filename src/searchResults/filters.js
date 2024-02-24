import { Box, Card, CardContent, Slider } from '@mui/material';
import React from 'react'
import useStyles from './styles';

const Filters = (props) => {
    const classes = useStyles();
    return (<Box>
        <Card className={classes.activeCommunityCard}>
            <CardContent>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </CardContent>
        </Card>
    </Box>)

}

export default Filters;