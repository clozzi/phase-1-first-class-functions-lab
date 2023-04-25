// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (newDrivers) => {
    return newDrivers = (drivers.slice(0,2))
}

const returnLastTwoDrivers = (lastDrivers) => {
    return lastDrivers = (drivers.slice(-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
    return function(multiply) {
        return fare * multiply;
    }
}

function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2;
}

function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers (drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}