const data = require("../data")

const monthNumberToString = [
    undefined,
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const getData = (buildData) => {
    const year = parseInt(buildData.dateId.slice(0, 4), 10);
    const month = parseInt(buildData.dateId.slice(4, 6), 10);
    const date = parseInt(buildData.dateId.slice(6, 8), 10);

    return {
        dateId: buildData.dateId,
        month: monthNumberToString[month],
        date,
        author: data[buildData.dateId]["author"],
    }
}

module.exports = getData
