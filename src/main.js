//Append Tool
let tool = document.body.appendChild(document.createElement("div"));
tool.id = "tool";
tool.classList.add("toolElement")
let toolActive = false;
const canvas = document.body.appendChild(document.createElement("canvas"));
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
canvas.className = "canvas"
canvas.style.visibility = "hidden";
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#4381C1"

//Header
let toolHeader = tool.appendChild(document.createElement("h1"))
toolHeader.id = "toolHeader";
toolHeader.classList.add("toolElement");
toolHeader.innerText = "Smarta Schedule";

//Subheader
let subHeader = tool.appendChild(document.createElement("h2"))
subHeader.id = "subHeader";
subHeader.classList.add("toolElement")
subHeader.innerText = "Select Service Type:"

//Grid Container
let gridContainer = tool.appendChild(document.createElement("div"))
gridContainer.id = "gridContainer"
gridContainer.classList.add("toolElement")

//Append Items

//Float
let floatItem = gridContainer.appendChild(document.createElement("div"))
floatItem.id = "floatItem"
floatItem.classList.add("toolElement")
floatItem.classList.add("gridItem")
let floatText = floatItem.appendChild(document.createElement("h3"))
floatText.id = "floatText"
floatText.classList.add("toolElement")
floatText.innerText = "Float (Single/Couple)"

//Sauna
let saunaItem = gridContainer.appendChild(document.createElement("div"))
saunaItem.id = "saunaItem"
saunaItem.classList.add("toolElement")
saunaItem.classList.add("gridItem")
let saunaText = saunaItem.appendChild(document.createElement("h3"))
saunaText.id = "saunaText"
saunaText.classList.add("toolElement")
saunaText.innerText = "Sauna (Single/Couple)"

//Massage 45
let mass45Item = gridContainer.appendChild(document.createElement("div"))
mass45Item.id = "mass45Item"
mass45Item.classList.add("toolElement")
mass45Item.classList.add("gridItem")
let mass45Text = mass45Item.appendChild(document.createElement("h3"))
mass45Text.id = "mass45Text"
mass45Text.classList.add("toolElement")
mass45Text.innerText = "45 Minute Massage"

//Massage 60
let mass60Item = gridContainer.appendChild(document.createElement("div"))
mass60Item.id = "mass60Item"
mass60Item.classList.add("toolElement")
mass60Item.classList.add("gridItem")
let mass60Text = mass60Item.appendChild(document.createElement("h3"))
mass60Text.id = "mass60Text"
mass60Text.classList.add("toolElement")
mass60Text.innerText = "60 Minute Massage"

//Massage 90
let mass90Item = gridContainer.appendChild(document.createElement("div"))
mass90Item.id = "mass90Item"
mass90Item.classList.add("toolElement")
mass90Item.classList.add("gridItem")
let mass90Text = mass90Item.appendChild(document.createElement("h3"))
mass90Text.id = "mass90Text"
mass90Text.classList.add("toolElement")
mass90Text.innerText = "90 Minute Massage"

//Flauna
let flaunaItem = gridContainer.appendChild(document.createElement("div"))
flaunaItem.id = "flaunaItem"
flaunaItem.classList.add("toolElement")
flaunaItem.classList.add("gridItem")
let flaunaText = flaunaItem.appendChild(document.createElement("h3"))
flaunaText.id = "flaunaText"
flaunaText.classList.add("toolElement")
flaunaText.innerText = "Flauna (Single/Couple)"

//Floatage 45
let floatage45Item = gridContainer.appendChild(document.createElement("div"))
floatage45Item.id = "floatage45Item"
floatage45Item.classList.add("toolElement")
floatage45Item.classList.add("gridItem")
let floatage45Text = floatage45Item.appendChild(document.createElement("h3"))
floatage45Text.id = "floatage45Text"
floatage45Text.classList.add("toolElement")
floatage45Text.innerText = "Single Floatage (45)"

//Floatage 60
let floatage60Item = gridContainer.appendChild(document.createElement("div"))
floatage60Item.id = "floatage60Item"
floatage60Item.classList.add("toolElement")
floatage60Item.classList.add("gridItem")
let floatage60Text = floatage60Item.appendChild(document.createElement("h3"))
floatage60Text.id = "floatage60Text"
floatage60Text.classList.add("toolElement")
floatage60Text.innerText = "Single Floatage (60)"

//Floatage 90
let floatage90Item = gridContainer.appendChild(document.createElement("div"))
floatage90Item.id = "floatage90Item"
floatage90Item.classList.add("toolElement")
floatage90Item.classList.add("gridItem")
let floatage90Text = floatage90Item.appendChild(document.createElement("h3"))
floatage90Text.id = "floatage90Text"
floatage90Text.classList.add("toolElement")
floatage90Text.innerText = "Single Floatage (90)"

// Couples Floatage
let cFloatageItem = gridContainer.appendChild(document.createElement("div"))
cFloatageItem.id = "cFloatageItem"
cFloatageItem.classList.add("toolElement")
cFloatageItem.classList.add("gridItem")
let cFloatageText = cFloatageItem.appendChild(document.createElement("h3"))
cFloatageText.id = "cFloatageText"
cFloatageText.classList.add("toolElement")
cFloatageText.innerText = "Couples Floatage (45)"

//CWP
let cwp45Item = gridContainer.appendChild(document.createElement("div"))
cwp45Item.id = "cwp45Item"
cwp45Item.classList.add("toolElement")
cwp45Item.classList.add("gridItem")
let cwp45Text = cwp45Item.appendChild(document.createElement("h3"))
cwp45Text.id = "cwp45Text"
cwp45Text.classList.add("toolElement")
cwp45Text.innerText = "Complete Wellness (45)"

//CWP
let cwp60Item = gridContainer.appendChild(document.createElement("div"))
cwp60Item.id = "cwp60Item"
cwp60Item.classList.add("toolElement")
cwp60Item.classList.add("gridItem")
let cwp60Text = cwp60Item.appendChild(document.createElement("h3"))
cwp60Text.id = "cwp60Text"
cwp60Text.classList.add("toolElement")
cwp60Text.innerText = "Complete Wellness (60)"

//CWP
let cwp90Item = gridContainer.appendChild(document.createElement("div"))
cwp90Item.id = "cwp90Item"
cwp90Item.classList.add("toolElement")
cwp90Item.classList.add("gridItem")
let cwp90Text = cwp90Item.appendChild(document.createElement("h3"))
cwp90Text.id = "cwp90Text"
cwp90Text.classList.add("toolElement")
cwp90Text.innerText = "Complete Wellness (90)"

//CCWP
let ccwpItem = gridContainer.appendChild(document.createElement("div"))
ccwpItem.id = "ccwpItem"
ccwpItem.classList.add("toolElement")
ccwpItem.classList.add("gridItem")
let ccwpText = ccwpItem.appendChild(document.createElement("h3"))
ccwpText.id = "ccwpText"
ccwpText.classList.add("toolElement")
ccwpText.innerText = "Couples Complete Wellness (45)"

let bookingArray = null;
let floats = null;
let floatTimes = []
let saunas = null;
let saunaTimes = []
let massages = null;
let massageTimes = []
let linesDrawn = [];

addEventListener("keypress", (event) => {
    if (event.code == 'BracketLeft' && !toolActive) {
        getBookings();
        floats = getFloats(bookingArray);
        saunas = getSaunas(bookingArray);
        massages = getMassages(bookingArray);
        activateTool();
    }
    if (event.code == "BracketRight") {
        window.location.reload();
    }
});

addEventListener("click", (event) => {
    if (!event.target.className.includes("toolElement") && toolActive) {
        deactivateTool();
    }
    else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (event.target.id == "floatItem" || event.target.id == "floatText") {
        findBestFloat(floats);
        deactivateTool();
    }
    if (event.target.id == "saunaItem" || event.target.id == "saunaText") {
        findBestSauna(saunas);
        deactivateTool();
    }
    if (event.target.id == "flaunaItem" || event.target.id == "flaunaText") {
        findBestFlauna(floats, saunas);
        deactivateTool();
    }
    if (event.target.id == "floatage45Item" || event.target.id == "floatage45Text") {
        findBestFloatage(floats, massages, 60);
        deactivateTool();
    }
    if (event.target.id == "floatage60Item" || event.target.id == "floatage60Text") {
        findBestFloatage(floats, massages, 75);
        deactivateTool();
    }
    if (event.target.id == "floatage90Item" || event.target.id == "floatage90Text") {
        findBestFloatage(floats, massages, 105);
        deactivateTool();
    }
    if (event.target.id == "mass45Item" || event.target.id == "mass45Text") {
        findBestMassage(massages, 60)
        deactivateTool();
    }
    if (event.target.id == "mass60Item" || event.target.id == "mass60Text") {
        findBestMassage(massages, 75)
        deactivateTool();
    }
    if (event.target.id == "mass90Item" || event.target.id == "mass60Text") {
        findBestMassage(massages, 105)
        deactivateTool();
    }
    if (event.target.id == "cwp45Item" || event.target.id == "cwp45Text") {
        findBestCWP(floats, saunas, massages, 60)
        deactivateTool();
    }
    if (event.target.id == "cwp60Item" || event.target.id == "cwp60Text") {
        findBestCWP(floats, saunas, massages, 75)
        deactivateTool();
    }
    if (event.target.id == "cwp90Item" || event.target.id == "cwp90Text") {
        findBestCWP(floats, saunas, massages, 105)
        deactivateTool();
    }
})

function activateTool() {
    let tool = document.getElementById("tool");
    tool.style.visibility = "visible";
    toolActive = true;
}

function deactivateTool() {
    let tool = document.getElementById("tool");
    tool.style.visibility = "hidden";
    toolActive = false;
}

function getBookings() {
    bookingArray = document.getElementsByClassName("new_reservation");
    bookingArray = Array.from(bookingArray);
    for (let i = 0; i < bookingArray.length; i++) {
        if (bookingArray[i].classList.contains("NoPractitioner")) {
            bookingArray.splice(i, 1);
            i--;
        }
    }
}

function getFloats(bookings) {
    let floats = [];
    for (let i = 0; i < bookings.length; i++) {
        let description = bookings[i].dataset.dropDescription;
        if (description.includes("Float")) {
            floats.push(bookings[i]);
            floatTimes.push(getAbsoluteTime(bookings[i].dataset.dropDescription))
        }
    }
    return floats;
}

function getSaunas(bookings) {
    let saunas = [];
    for (let i = 0; i < bookings.length; i++) {
        let description = bookings[i].dataset.dropDescription;
        if (description.includes("Sauna")) {
            saunas.push(bookings[i]);
            saunaTimes.push(getAbsoluteTime(bookings[i].dataset.dropDescription))
        }
    }
    return saunas;
}

function getMassages(bookings) {
    let massages = [];
    for (let i = 0; i < bookings.length; i++) {
        let description = bookings[i].dataset.dropDescription;
        if (description.includes("Massage")) {
            massages.push(bookings[i]);
            massageTimes.push(getAbsoluteTime(bookings[i].dataset.dropDescription))
        }
    }
    return massages;
}

function findBestFloat(floats) {
    //Priority 1
    for (let i = 0; i < floats.length; i++) {
        let floatTime = getAbsoluteTime(floats[i].dataset.dropDescription)
        //Don't color in if anything perfectly falls before it (or a massage after)
        if (valueInArray(floatTime - 60, saunaTimes)) {
            continue;
        }
        if (valueInArray(floatTime - 60, massageTimes) || valueInArray(floatTime - 75, massageTimes) || valueInArray(floatTime - 105, massageTimes) || valueInArray(floatTime + 90, massageTimes)) {
            continue;
        }
        floats[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>"
    }


    //Priority 2
    for (let i = 0; i < floats.length; i++) {
        let floatTime = getAbsoluteTime(floats[i].dataset.dropDescription)
        if (!floats[i].innerHTML.includes("Priority")) {
            //Disregarding massage > sauna > float
            if (valueInArray(floatTime - 60, saunaTimes) && ((valueInArray(floatTime - 120, massageTimes) || valueInArray(floatTime - 135, massageTimes) || valueInArray(floatTime - 165, massageTimes)))) {
                continue;
            }
            //Disregarding sauna > massage > float
            if ((valueInArray(floatTime - 60, massageTimes) && valueInArray(floatTime - 120, saunaTimes)) || (valueInArray(floatTime - 75, massageTimes) && valueInArray(floatTime - 135, saunaTimes)) ||
                (valueInArray(floatTime - 105, massageTimes) && valueInArray(floatTime - 165, saunaTimes))) {
                continue;
            }
            floats[i].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>"
        }
    }

    //Priority 3 -> Still needs work to promote CCWP
    for (let i = 0; i < floats.length; i++) {
        if (!floats[i].innerHTML.includes("Priority")) {
            floats[i].innerHTML = "<div class='priority3'><h3 class='priorityTag'>Priority 3</h3></div>"
        }
    }
}
function findBestSauna(saunas) {
    for (let i = 0; i < saunas.length; i++) {
        let saunaTime = getAbsoluteTime(saunas[i].dataset.dropDescription)
        if (valueInArray(saunaTime + 60, floatTimes)) {
            continue;
        }
        if (valueInArray(saunaTime - 60, massageTimes) || valueInArray(saunaTime - 75, massageTimes) || valueInArray(saunaTime - 105, massageTimes) || valueInArray(saunaTime + 60, massageTimes)) {
            continue;
        }
        saunas[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
    }

    for (let i = 0; i < saunas.length; i++) {
        let saunaTime = getAbsoluteTime(saunas[i].dataset.dropDescription)
        if (!saunas[i].innerHTML.includes("Priority")) {
            //massage > sauna > float
            if (valueInArray(saunaTime + 60, floatTimes) && (valueInArray(saunaTime - 60, massageTimes) || valueInArray(saunaTime - 75, massageTimes) || valueInArray(saunaTime - 105, massageTimes))) {
                continue;
            }
            //sauna > massage > float
            if (valueInArray(saunaTime + 60, massageTimes) && (valueInArray(saunaTime + 120, floatTimes) || valueInArray(saunaTime + 135, floatTimes) || valueInArray(saunaTime + 165, floatTimes))) {
                continue;
            }
            saunas[i].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";
        }
    }
    for (let i = 0; i < saunas.length; i++) {
        if (!saunas[i].innerHTML.includes("Priority")) {
            saunas[i].innerHTML = "<div class='priority3'><h3 class='priorityTag'>Priority 3</h3></div>";
        }
    }
}

function findBestMassage(massages, massageDuration){

    //Priority 1
    for(let i = 0; i < massages.length; i ++){
        let massageTime = getAbsoluteTime(massages[i].dataset.dropDescription)
        //sauna > massage > float
        if(valueInArray(massageTime - 60, saunaTimes) || valueInArray(massageTime + massageDuration, floatTimes)){
            continue;
        }
        //massage > sauna > float
        if(valueInArray(massageTime + massageDuration, saunaTimes) || valueInArray(massageTime + massageDuration + 60, floatTimes)){
            continue;
        }
        //sauna > massage > float
        if(valueInArray(massageTime - 150, saunaTimes) || valueInArray(massageTime - 90, floatTimes)){
            continue;
        }
        if(massageTime % 60 != 0){
            continue;
        }
        massages[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
    }

    //Priority 2
    for (let i = 0; i < massages.length; i++) {
        let massageTime = getAbsoluteTime(massages[i].dataset.dropDescription)
        if (!massages[i].innerHTML.includes("Priority")) {
            //sauna > massage > float
            if (valueInArray(massageTime - 60, saunaTimes) && valueInArray(massageTime + massageDuration, floatTimes)){
                continue;
            }
            //massage > sauna > float
            if(valueInArray(massageTime + massageDuration, saunaTimes) && valueInArray(massageTime + massageDuration + 60, floatTimes)){
                continue;
            }
            //sauna > massage > float
            if(valueInArray(massageTime - 150, saunaTimes) && valueInArray(massageTime - 90, floatTimes)){
                continue;
            }
            if(massageTime % 60 != 0){
                continue;
            }
            massages[i].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";
        }
    }
    for (let i = 0; i < massages.length; i++) {
        if (!massages[i].innerHTML.includes("Priority")) {
            massages[i].innerHTML = "<div class='priority3'><h3 class='priorityTag'>Priority 3</h3></div>";
        }
    }
}

function findBestFlauna(floats, saunas) {
    canvas.style.visibility = "visible";
    for (let i = 0; i < saunas.length; i++) {
        let saunaTime = getAbsoluteTime(saunas[i].dataset.dropDescription);
        for (let j = 0; j < floatTimes.length; j++) {
            if (valueInArray(saunaTime - 60, massageTimes) || valueInArray(saunaTime - 75, massageTimes) || valueInArray(saunaTime - 105, massageTimes)) {
                continue;
            }
            if (floatTimes[j] == saunaTime + 60) {
                saunas[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                floats[j].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";

                // Start a new Path
                ctx.beginPath();
                ctx.moveTo(saunas[i].getBoundingClientRect().left + (saunas[i].offsetWidth / 2) + window.scrollX, saunas[i].getBoundingClientRect().top + (saunas[i].offsetHeight / 4) + window.scrollY);
                ctx.lineTo(floats[j].getBoundingClientRect().left + (floats[j].offsetWidth / 2) + window.scrollX, floats[j].getBoundingClientRect().top + (floats[j].offsetHeight / 4) + window.scrollY);

                // Draw the Path
                ctx.stroke();
            }
        }
    }
    for (let i = 0; i < saunas.length; i++) {
        let saunaTime = getAbsoluteTime(saunas[i].dataset.dropDescription)
        for (let j = 0; j < floatTimes.length; j++) {
            if (!saunas[i].innerHTML.includes("Priority")) {
                if (floatTimes[j] == saunaTime + 60) {
                    saunas[i].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";
                    floats[j].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";

                    // Start a new Path
                    ctx.beginPath();
                    ctx.moveTo(saunas[i].getBoundingClientRect().left + (saunas[i].offsetWidth / 2) + window.scrollX, saunas[i].getBoundingClientRect().top + (saunas[i].offsetHeight / 4) + window.scrollY);
                    ctx.lineTo(floats[j].getBoundingClientRect().left + (floats[j].offsetWidth / 2) + window.scrollX, floats[j].getBoundingClientRect().top + (floats[j].offsetHeight / 4) + window.scrollY);

                    // Draw the Path
                    ctx.stroke();
                }
            }
        }
    }
}

function findBestFloatage(floats, massages, massageLength) {
    canvas.style.visibility = "visible";
    for (let i = 0; i < massages.length; i++) {
        let massageTime = getAbsoluteTime(massages[i].dataset.dropDescription)
        for (let j = 0; j < floatTimes.length; j++) {
            // sauna > massage > float
            if (floatTimes[j] == massageTime + massageLength) {
                if (valueInArray(massageTime - 60, saunaTimes)) {
                    floats[j].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";
                    massages[i].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";

                    // Start a new Path
                    ctx.beginPath();
                    ctx.moveTo(massages[i].getBoundingClientRect().left + (massages[i].offsetWidth / 2) + window.scrollX, massages[i].getBoundingClientRect().top + (massages[i].offsetHeight / 4) + window.scrollY);
                    ctx.lineTo(floats[j].getBoundingClientRect().left + (floats[j].offsetWidth / 2) + window.scrollX, floats[j].getBoundingClientRect().top + (floats[j].offsetHeight / 4) + window.scrollY);

                    // Draw the Path
                    ctx.stroke();
                }
                else {
                    massages[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                    floats[j].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";

                    // Start a new Path
                    ctx.beginPath();
                    ctx.moveTo(massages[i].getBoundingClientRect().left + (massages[i].offsetWidth / 2) + window.scrollX, massages[i].getBoundingClientRect().top + (massages[i].offsetHeight / 4) + window.scrollY);
                    ctx.lineTo(floats[j].getBoundingClientRect().left + (floats[j].offsetWidth / 2) + window.scrollX, floats[j].getBoundingClientRect().top + (floats[j].offsetHeight / 4) + window.scrollY);

                    // Draw the Path
                    ctx.stroke();
                }
            }

            // sauna > float > massage
            if (floatTimes[j] == massageTime - 90) {
                if (valueInArray(massageTime - 150, saunaTimes)) {
                    floats[j].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";
                    massages[i].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";

                    // Start a new Path
                    ctx.beginPath();
                    ctx.moveTo(massages[i].getBoundingClientRect().left + (massages[i].offsetWidth / 2) + window.scrollX, massages[i].getBoundingClientRect().top + (massages[i].offsetHeight / 4) + window.scrollY);
                    ctx.lineTo(floats[j].getBoundingClientRect().left + (floats[j].offsetWidth / 2) + window.scrollX, floats[j].getBoundingClientRect().top + (floats[j].offsetHeight / 4) + window.scrollY);

                    // Draw the Path
                    ctx.stroke();
                }
                else {
                    massages[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                    floats[j].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                    
                    // Start a new Path
                    ctx.beginPath();
                    ctx.moveTo(massages[i].getBoundingClientRect().left + (massages[i].offsetWidth / 2) + window.scrollX, massages[i].getBoundingClientRect().top + (massages[i].offsetHeight / 4) + window.scrollY);
                    ctx.lineTo(floats[j].getBoundingClientRect().left + (floats[j].offsetWidth / 2) + window.scrollX, floats[j].getBoundingClientRect().top + (floats[j].offsetHeight / 4) + window.scrollY);

                    // Draw the Path
                    ctx.stroke();
                }
            }
        }
    }
}

function findBestCWP(floats, saunas, massages, massageDuration) {
    canvas.style.visibility = "visible";
    for (let i = 0; i < massages.length; i++) {
        let massageTime = getAbsoluteTime(massages[i].dataset.dropDescription)
        let couples = false;
        for (let j = 0; j < massages.length; j++) {
            let checkTime = getAbsoluteTime(massages[j].dataset.dropDescription)
            if (i != j) {
                if (massageTime == checkTime) {
                    couples = true;
                }
            }
        }
        if (couples) {
            continue;
        }
        //massage > sauna > float
        for (let k = 0; k < saunaTimes.length; k++) {
            if (saunaTimes[k] == massageTime + massageDuration) {
                for (let l = 0; l < floatTimes.length; l++) {
                    if (floatTimes[l] == massageTime + massageDuration + 60) {
                        massages[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                        saunas[k].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                        floats[l].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                    }
                }
            }
        }
        //sauna > massage > float
        for (let k = 0; k < saunaTimes.length; k++) {
            if (saunaTimes[k] == massageTime - 60) {
                for (let l = 0; l < floatTimes.length; l++) {
                    if (floatTimes[l] == massageTime + massageDuration) {
                        massages[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                        saunas[k].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                        floats[l].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                    }
                }
            }
        }
        //sauna > float > massage
        for (let k = 0; k < saunaTimes.length; k++) {
            if (saunaTimes[k] == massageTime - 150) {
                for (let l = 0; l < floatTimes.length; l++) {
                    if (floatTimes[l] == massageTime - 90) {
                        massages[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                        saunas[k].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                        floats[l].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                    }
                }
            }
        }
    }
}

function getAbsoluteTime(time) {
    let val = 0;
    let words = time.split(" ");
    let keyWord = words[words.length - 1];
    if (keyWord == "Noon") {
        return 12 * 60;
    }
    if (keyWord.substring(keyWord.length - 2, keyWord.length) == "pm") {
        val += 12 * 60;
    }
    keyWord = keyWord.substring(0, keyWord.length - 2)
    if (keyWord.length == 1 || keyWord.length == 2) {
        return val + (keyWord * 60);
    }
    else {
        let hours = keyWord.substring(0, 2)
        if (hours.charAt(1) == ':') {
            val += hours.charAt(0) * 60;
        }
        else if (hours != '12') {
            val += hours * 60;
        }
        let minutes = keyWord.substring(keyWord.length - 2, keyWord.length);
        val += 60 * (minutes / 60);
    }
    return val;
}

function valueInArray(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return true;
        }
    }
    return false;
}