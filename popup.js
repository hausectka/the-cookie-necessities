//popup.js
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("Button");
    const statusPop = document.getElementById("Status");
    const checkbox = document.getElementById("ThirdPartyCheckbox");
function reloadExtension(autoOn) {
    if (autoOn) {
        statusPop.textContent = "Unnecessary pop up kills enabled";
        statusPop.className = "status enabled";
        button.textContent = "Disable extension";
    } else {
        statusPop.textContent = "Unnecessary pop up kills Disabled";
        statusPop.className = "status disabled";
        button.textContent = "Enable extension";
    }
}
function thirdPartyCheckbox(useBlock){
    checkbox = useBlock
}
    //TODO: 
});
