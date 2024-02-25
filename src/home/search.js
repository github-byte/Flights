import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, useTheme, Grid, Autocomplete, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import useStyles from '../styles';
import { FLIGHT_ARRIVAL, FLIGHT_DEPARTURE } from '../constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MainContext, getFlightsData } from '../utility';

const Search = ({ apiData = [], source = null, destination = null, date = null, isEdit = false, setFlightResults = () => { }, setOriginalRes = () => { }, setSource = () => { }, setDestination = () => { }, setDate = () => { }, setIsEdit = () => { } }) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const theme = useTheme();
    const [arrivalAirports, setArrivalAirports] = useState([]);
    const [departureAirports, setDepartureAirports] = useState([]);
    const { deskTopView = false } = useContext(MainContext)
    console.log("inside source", source, destination)
    useEffect(() => {
        if (!apiData || apiData?.length <= 0) return;
        let arrivalSet = new Set();
        let departureSet = new Set();
        let dateData = '';
        apiData.forEach((item) => {
            const { displayData = {} } = item || {};
            const { source = {}, destination = {} } = displayData || []
            const { airport: sourceData = {}, depTime = '' } = source || {}
            const { airport: destinationData = {} } = destination || {}
            dateData = depTime
            departureSet.add(sourceData.airportName)
            arrivalSet.add(destinationData.airportName)
        })
        let arrivalArr = [];
        let departureArr = [];
        arrivalSet.forEach((item) => {
            arrivalArr.push({ value: item, label: item })
        })
        departureSet.forEach((item) => {
            departureArr.push({ value: item, label: item })
        })
        if (source === null && destination === null) {
            setSource(departureArr?.[0])
            setDestination(arrivalArr?.[0])
            setDate(dateData)
        }
        setArrivalAirports([...arrivalArr]);
        setDepartureAirports([...departureArr]);
    }, [apiData])
    const handleSubmit = () => {
        getFlightsData(source?.value, destination?.value, date, setOriginalRes, setFlightResults)
        setIsEdit(!isEdit);
    }
    console.log("in flight122", source, destination, departureAirports, departureAirports?.[0])
    return (
        <Box>
            <Card className={classes.activeCommunityCard}>
                <CardContent sx={{ width: '95%', mt: 5, display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ display: 'flex' }} md={4} xs={12} item>
                            {deskTopView && <img style={{ marginRight: '20px' }} alt='flight1' src={FLIGHT_ARRIVAL} />}
                            <Autocomplete sx={{ width: '100%' }} freeSolo value={source} onChange={(e, val) => setSource(val)} options={departureAirports} renderInput={(params) => <TextField {...params} label="Departure" />} />
                        </Grid>
                        <Grid sx={{ display: 'flex' }} md={4} xs={12} item>
                            {deskTopView && <img style={{ marginRight: '20px' }} alt='flight1' src={FLIGHT_DEPARTURE} />}
                            <Autocomplete sx={{ width: '100%' }} freeSolo value={destination} onChange={(e, val) => setDestination(val)} options={arrivalAirports} renderInput={(params) => <TextField {...params} label="Arrival" />} />
                        </Grid>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }} md={4} xs={12} item>
                            {deskTopView && <CalendarMonthIcon sx={{ color: theme.palette.text.secondary, height: '100%', mr: '20px' }} />}
                            <input value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '100%', height: '100%', border: '0.5px solid lightgrey', borderRadius: '4px', paddingLeft: '16px', paddingRight: '16px', fontFamily: 'sans-serif' }} type="datetime-local" />
                        </Grid>
                    </Grid>
                    {/* <Typography variant="body1" color="initial">See All Suggestions</Typography> */}
                    <Button className={classes.search} onClick={() => isEdit ? handleSubmit() : navigate('/search', { state: { source, destination, date, apiData } })} variant="text" sx={{ backgroundColor: theme.palette.text.secondary, color: 'white', width: '200px', mt: 5 }}>
                        Search
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )

}

export default Search;