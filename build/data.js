const dateIdList = [
    "20210712",
    "20210713",
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
