const dateIdList = [
    "20210712",
    "20210713",
    "20210714",
    "20210715",
    "20210716",
    "20210717",
    "20210718",
    "20210719",
    "20210720",
    "20210721",
    "20210722",
    "20210723",
]

var data = [{
    data: {},
    from: "/",
    to: "/"
}]

for (const dateId of dateIdList) {
    data.push({
        data: { dateId },
        from: "/[dateId]/",
        to: `/${dateId}/`
    })
}

module.exports = data
