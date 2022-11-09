let data;
let cards;
let menuItemActive;
const menu = document.querySelectorAll(".period")

menu.forEach((element) => {
    element.addEventListener('click', onMenuChange);
})
fetch('./data.json')
    .then(async (response) => {
        data = await response.json();
        menuItemActive = "weekly"
        updatePeriods();
    })

function onMenuChange(event) {
    menu.forEach((input) => {
        input.classList.remove('period-active')
    })
    event.target.classList.add("period-active")
    menuItemActive = event.target.innerHTML.toLowerCase();

    updatePeriods()
}

function updatePeriods(){
    cards = document.querySelectorAll(".card-tracking");
    cards.forEach((card) => {
        const titleElement = card.getElementsByClassName("title").item(0);
        const selectedItemData = data.filter(item => item.title == titleElement.innerHTML)[0]
        card.querySelector(".time").innerHTML = selectedItemData.timeframes[menuItemActive].current + "hrs"

        const previousTime = selectedItemData.timeframes[menuItemActive].previous
        switch (menuItemActive) {
            case "daily":
                card.querySelector(".time-previous").innerHTML = "Last Day - " + previousTime + "hrs"
                break;
            case "weekly":
                card.querySelector(".time-previous").innerHTML = "Last Week - " + previousTime + "hrs"
                break;
            case "monthly":
                card.querySelector(".time-previous").innerHTML = "Last Month - " + previousTime + "hrs"
                break;
            default:
                card.querySelector(".time-previous").innerHTML = "Last Week - " + previousTime + "hrs"
        }
    })
}