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

const systemShare = () => {
    navigator.share({
        title: document.title,
        text: document.querySelector('meta[name="description"]').getAttribute("content"),
        url: window.location.href,
    })
}

elements["#copy-link-btn"].addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href)
})

elements["#system-share-btn"].addEventListener("click", systemShare)

elements["#submit-btn"].addEventListener("click", () => { window.open("https://github.com/MrWillCom/a-calendar/issues/new?assignees=&labels=new-photo&template=submit_a_photo.md") })

elements["#report-btn"].addEventListener("click", () => { window.open("https://github.com/MrWillCom/a-calendar/issues/new?assignees=&labels=report-photo&template=report_a_photo.md") })
