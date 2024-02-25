import React, { useContext } from 'react'
import { Box, Card, Divider, Typography } from '@mui/material';
import useStyles from '../styles'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { format } from 'date-fns'
import { MainContext } from '../utility';

const ResultCard = ({ item = {}, index = 0 }) => {
    const classes = useStyles();
    const { deskTopView = false } = useContext(MainContext);
    const { displayData = {}, fare = 0 } = item || {}
    const { totalDuration = '', airlines = [], destination = {}, source = {}, stopInfo = '' } = displayData || {}
    const { depTime = '', airport: sourceAirport = {} } = source || {};
    const { cityName: originName = '', airportName: sourceAirportName = '', airportCode: sourceAirportCode = '' } = sourceAirport || {}
    const { arrTime = '', airport: destinationAirport = '', } = destination || {}
    const { cityName: destinationCity = '', airportName: destinationAirportName = '', airportCode: destinationAirportCode = '' } = destinationAirport || {}
    const { airlineName = '', airlineCode = '', flightNumber = 0 } = airlines?.[0] || {}
    return (
        <Card sx={{ mt: index !== 0 && 2 }} className={classes.activeCommunityCard}>
            <Box display='flex' flexDirection={deskTopView ? 'row' : 'column'} pl={2} pr={2} justifyContent='space-between' width='100%' >
                {deskTopView ? <Typography sx={{ fontSize: 20 }} variant="h5">
                    {airlineName}
                    <Typography sx={{ fontSize: 14, color: 'grey' }}>{`${airlineCode}-${flightNumber}`}</Typography>
                </Typography> :
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Box>
                            <Typography sx={{ fontSize: 20 }} variant="h5">
                                {airlineName}
                                <Typography sx={{ fontSize: 14, color: 'grey' }}>{`${airlineCode}-${flightNumber}`}</Typography>
                            </Typography>
                        </Box>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 24 }} variant="h4" color="primary" component="p">
                            <CurrencyRupeeIcon sx={{ fontSize: 24 }} />{`${fare}`}
                        </Typography>
                    </Box>
                }
                <Box display='flex' alignItems='center' justifyContent='space-between' flexDirection='row' >
                    <Typography sx={{ fontWeight: 600, marginRight: '50px', fontSize: 22 }} variant="subtitle1">
                        {depTime && new Date(depTime) ? format(new Date(depTime), 'HH:mm') : ''}
                        <Typography variant="body1" color="initial">{originName}</Typography>
                    </Typography>
                    <Box display="flex" flexDirection='column' justifyContent='center'>
                        <Typography sx={{ textAlign: 'center' }} variant="body1" color="initial">{totalDuration}</Typography>
                        <hr style={{ display: "flex", width: '100px', height: '2px', backgroundColor: 'lightgrey', border: '1px solid lightgrey' }} />
                        <Typography sx={{ textAlign: 'center' }} variant="body1" color="initial">{stopInfo}</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 600, marginLeft: '50px', fontSize: 22 }} variant="subtitle1">
                        {arrTime && new Date(arrTime) ? format(new Date(arrTime), 'HH:mm') : ''}
                        <Typography variant="body1" color="initial">{destinationCity}</Typography>
                    </Typography>
                </Box>
                {deskTopView && <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h4" color="primary" component="p">
                    <CurrencyRupeeIcon sx={{ fontSize: 30 }} />{`${fare}`}
                </Typography>}
            </Box>
            <Box width={'100%'}>
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Box display='flex' justifyContent={'space-between'} alignItems='center'>
                    <Typography sx={{ mt: 1, color: 'grey' }} variant="body1" color="initial">{`${sourceAirportName} (${sourceAirportCode})`}</Typography>
                    <Typography sx={{ mt: 1, textAlign: 'right', color: 'grey' }} variant="body1" color="initial">{`${destinationAirportName} (${destinationAirportCode})`}</Typography>
                </Box>
            </Box>
        </Card>
    )

}

export default ResultCard;