import axios from 'axios';
import React from 'react'
import { API_URL } from './constants';

export const FlightsResultsContext = React.createContext();
export const MainContext = React.createContext();

export const getFlightsData = (sourceLabel, destinationLabel, date, setOrigData, setData) => {
    console.log("ins flights2")
    axios.get(API_URL, {
        headers: {
            "Content-Type": "application/json",
            source: "website",
        },
    })
        .then((response) => {
            if (response.status >= 200 && response.status < 300 && response.data) {
                let { data = {} } = response.data || {};
                let { result = [] } = data
                let arr = []
                if (sourceLabel && destinationLabel) {
                    arr = getSelectedResults(result, sourceLabel, destinationLabel, date)
                }
                setOrigData(sourceLabel ? arr : result)
                setData(sourceLabel ? arr : result)
            }
            return response; //{data: response.data, stats}
        })
        .catch(function (error) {
            // handle error
            let { response = {} } = error;
            return { err: error, status: response.status };
        });
}

export const getSelectedResults = (result = [], sourceLabel = '', destinationLabel = '', date = '') => {
    let arr = []
    result.forEach(element => {
        const { displayData = {} } = element
        const { source = {}, destination = {} } = displayData || {}
        const { airport: sourceAirport = {}, depTime = '' } = source || {};
        const { airport: destinationAirport = {} } = destination || {}
        const { airportName: sourceName = '' } = sourceAirport
        const { airportName: destinationAirportName = '' } = destinationAirport
        if (sourceName === sourceLabel && destinationAirportName === destinationLabel && new Date(depTime).getDate() === new Date(date).getDate()) {
            arr.push(element)
        }
    })
    console.log("inside selected22", arr, date, result, sourceLabel, destinationLabel)
    return arr;
}