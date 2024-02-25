import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Box, Card, CardContent, Checkbox, Divider, FormControl, Slider, Typography, FormControlLabel } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import useStyles from './styles';
import { FlightsResultsContext } from '../utility';

const Filters = () => {
    const [max, setMax] = useState(0);
    const [airlines, setAirlines] = useState([])
    const [flightPrice, setFlightPrice] = useState(null)
    const classes = useStyles();
    const { flightResults = [], setFlightResults = () => { }, originalRes = [] } = useContext(FlightsResultsContext)

    useEffect(() => {
        if (!originalRes || originalRes?.length <= 0) return
        let maxPrice = Number.MIN_VALUE;
        const airlineSet = new Set();
        originalRes?.forEach((item) => {
            const { displayData = {} } = item || {}
            const { airlines: airlineData = [] } = displayData || {};
            airlineData.forEach((item) => {
                const { airlineName = '' } = item || {}
                airlineSet.add(airlineName);
            })
            if (item?.fare > maxPrice) {
                maxPrice = item?.fare
            }
        })
        setMax(maxPrice)
        const arr = [];
        let id = 0;
        airlineSet.forEach((item, index) => {
            const flightNames = { id, name: item, status: false };
            arr.push(flightNames)
            id++;
        })
        setAirlines(arr)
    }, [originalRes])

    const handlePriceChange = (val, arrayVal = null) => {
        let flightResultClone = arrayVal || structuredClone(originalRes) || [];
        flightResultClone = flightResultClone?.filter((item) => Number(item.fare) <= Number(val))
        setFlightResults(flightResultClone)
    }
    const handleAirlineChange = (e, val) => {
        const name = e.target.value;
        let flightResultClone = [];
        let airlineClone = [...airlines]
        airlineClone.forEach((item) => {
            if (item.name === name) {
                item.status = !item.status
            }
        })
        setAirlines(airlineClone)
        const statusTrueAirlines = airlineClone.filter((item) => item.status);
        originalRes?.forEach((item) => {
            const { displayData = {} } = item || {}
            const { airlines: airlineData = [] } = displayData || {}
            airlineData.forEach((obj) => {
                const { airlineName = '' } = obj || {}
                if (statusTrueAirlines.findIndex((item) => item.name === airlineName) >= 0) {
                    flightResultClone.push(item)
                }
                else if (statusTrueAirlines?.length === 0) {
                    flightResultClone.push(item)
                }
            })
        })
        if (flightPrice !== null) {
            handlePriceChange(flightPrice, flightResultClone)
        }
        else setFlightResults(flightResultClone)
    }
    console.log('inside airles', flightResults)
    return (<Box>
        <Card sx={{ width: '100%' }} className={classes.activeCommunityCard}>
            <CardContent>
                <Typography sx={{ fontWeight: 700 }} variant="h5" color="initial">Filter By</Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Box>
                    <Typography sx={{ fontSize: 16, mb: 1 }} variant="body1" color="initial">AIRLINES</Typography>
                    <FormControl>
                        {airlines?.map((item) => {
                            const { name = '', status = false, id = '' } = item || {}
                            return (<FormControlLabel
                                label={name}
                                control={
                                    <Checkbox
                                        value={name}
                                        id={id}
                                        checked={status}
                                        onChange={(e, val) => handleAirlineChange(e, val)}
                                        color="primary"
                                    />
                                }
                            />)
                        })}
                    </FormControl>
                </Box>
                <Box mt={3} width='300px'>
                    <Slider
                        aria-label="Small steps"
                        defaultValue={5}
                        getAriaValueText={''}
                        min={0}
                        max={max}
                        value={flightPrice == null ? max : flightPrice}
                        valueLabelDisplay="auto"
                        onChange={(e, newVal) => setFlightPrice(Number(newVal))}
                        onChangeCommitted={(e, newVal) => handlePriceChange(newVal)}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Typography sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }} variant="body1" color="initial"><CurrencyRupeeIcon sx={{ fontSize: 16 }} />{0}</Typography>
                        <Typography sx={{ textAlign: 'right', display: 'flex', alignItems: 'center' }} variant="body1" color="initial"><CurrencyRupeeIcon sx={{ fontSize: 16 }} />{`${max}`}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex' }} mt={3}>
                    <SwapVertIcon />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} variant="body1" color="primary">Sort by - Price: Low to High</Typography>
                </Box>
            </CardContent>
        </Card>
    </Box>)

}

export default Filters;