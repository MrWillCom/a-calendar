var elements = {
    ".front": document.getElementsByClassName("front")[0],
    ".photo-by": document.getElementsByClassName("photo-by")[0],
    ".more-btn": document.getElementsByClassName("more-btn")[0],
    ".more-panel": document.getElementsByClassName("more-panel")[0],
    ".more-panel>.close-btn": document.querySelector(".more-panel>.close-btn"),
    "#copy-link-btn": document.getElementById("copy-link-btn"),
    "#download-page-btn": document.getElementById("download-page-btn"),
    "#download-image-btn": document.getElementById("download-image-btn"),
    "#system-share-btn": document.getElementById("system-share-btn"),
    "#submit-btn": document.getElementById("submit-btn"),
    "#report-btn": document.getElementById("report-btn"),
}

const toggleMorePanel = () => {
    elements[".front"].classList.toggle("more-panel--open")
}

elements[".photo-by"].addEventListener("click", toggleMorePanel)
elements[".more-btn"].addEventListener("click", toggleMorePanel)
elements[".more-panel>.close-btn"].addEventListener("click", toggleMorePanel)

const savePage = () => {
    var canvas = document.createElement('canvas')
    canvas.width = 1200
    canvas.height = 1200 + 110
    var context = canvas.getContext('2d')

    var img = new Image()
    img.src = `/photos/${pageData.dateId}.png`
    img.onload = () => {
        var parsedWidth = 1200
        var parsedHeight = 1200
        if (img.width > img.height) {
            parsedWidth = img.width / img.height * 1200
            parsedHeight = 1200
        } else {
            parsedHeight = img.height / img.width * 1200
            parsedWidth = 1200
        }

        context.drawImage(img, -(parsedWidth - 1200) / 2, -(parsedHeight - 1200) / 2, parsedWidth, parsedHeight)

        context.font = '48px/48px "SF Pro"'
        context.fillStyle = 'rgba(255, 255, 255, 0.8)'
        context.fillText(pageData.month, 72, 940)

        context.font = '200px/164px "SF Pro Text"'
        context.fillStyle = '#ffffff'
        context.fillText(pageData.date, 72, 1128)

        context.fillStyle = '#ffffff'
        context.fillRect(0, 1200, 1200, 110)

        var logo = new Image()
        logo.src = '/favicon.png'
        logo.onload = () => {
            context.drawImage(logo, 0, 1200, 110, 110)

            context.font = '40px/40px "SF Pro Text"'
            context.fillStyle = '#000000'
            context.fillText("A Calendar", 125, 1250)

            context.font = '30px/30px "SF Pro"'
            context.fillStyle = '#000000cc'
            context.fillText(`Photo by ${pageData.author}`, 125, 1290)

            var qrcode = document.createElement('canvas')
            QRCode.toCanvas(qrcode, window.location.href, (err) => {
                if (err) console.error(err)

                context.drawImage(qrcode, 1090, 1200, 110, 110)

                var downloadLinkElement = document.createElement("a");
                downloadLinkElement.href = canvas.toDataURL('image/png');
                downloadLinkElement.setAttribute("download", 'todays-page.png');
                downloadLinkElement.click();
            })
        }
    }
}

elements["#download-page-btn"].addEventListener("click", savePage)

elements["#copy-link-btn"].addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href)
})

const systemShare = () => {
    navigator.share({
        title: document.title,
        text: document.querySelector('meta[name="description"]').getAttribute("content"),
        url: window.location.href,
    })
}

elements["#system-share-btn"].addEventListener("click", systemShare)

elements["#submit-btn"].addEventListener("click", () => { window.open("https://github.com/MrWillCom/a-calendar/issues/new?assignees=&labels=new-photo&template=submit_a_photo.md") })

elements["#report-btn"].addEventListener("click", () => { window.open("https://github.com/MrWillCom/a-calendar/issues/new?assignees=&labels=report-photo&template=report_a_photo.md") })
