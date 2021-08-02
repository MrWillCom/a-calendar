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
    "20210724",
    "20210725",
    "20210726",
    "20210727",
    "20210728",
    "20210729",
    "20210730",
    "20210731",
    "20210801",
    "20210802",
    "20210803",
]

var data = [{
    data: {},
    from: "/",
    to: "/"
}]

for (const dateId of dateIdList) {
    data.push({
        data: { dateId, earliest: dateIdList[0], latest: dateIdList[dateIdList.length - 1] },
        from: "/[dateId]/",
        to: `/${dateId}/`
    })
}

module.exports = data
