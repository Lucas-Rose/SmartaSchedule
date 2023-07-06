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
floatage45Text.innerText = "Floatage (45)"

//Floatage 60
let floatage60Item = gridContainer.appendChild(document.createElement("div"))
floatage60Item.id = "floatage60Item"
floatage60Item.classList.add("toolElement")
floatage60Item.classList.add("gridItem")
let floatage60Text = floatage60Item.appendChild(document.createElement("h3"))
floatage60Text.id = "floatage60Text"
floatage60Text.classList.add("toolElement")
floatage60Text.innerText = "Floatage (60)"

//Floatage 90
let floatage90Item = gridContainer.appendChild(document.createElement("div"))
floatage90Item.id = "floatage90Item"
floatage90Item.classList.add("toolElement")
floatage90Item.classList.add("gridItem")
let floatage90Text = floatage90Item.appendChild(document.createElement("h3"))
floatage90Text.id = "floatage90Text"
floatage90Text.classList.add("toolElement")
floatage90Text.innerText = "Floatage (90)"

//Saunage 45
let saunage45Item = gridContainer.appendChild(document.createElement("div"))
saunage45Item.id = "saunage45Item"
saunage45Item.classList.add("toolElement")
saunage45Item.classList.add("gridItem")
let saunage45Text = saunage45Item.appendChild(document.createElement("h3"))
saunage45Text.id = "saunage45Text"
saunage45Text.classList.add("toolElement")
saunage45Text.innerText = "Saunage (45)"

//Saunage 60
let saunage60Item = gridContainer.appendChild(document.createElement("div"))
saunage60Item.id = "saunage60Item"
saunage60Item.classList.add("toolElement")
saunage60Item.classList.add("gridItem")
let saunage60Text = saunage60Item.appendChild(document.createElement("h3"))
saunage60Text.id = "saunage60Text"
saunage60Text.classList.add("toolElement")
saunage60Text.innerText = "Saunage (60)"

//Saunage 90
let saunage90Item = gridContainer.appendChild(document.createElement("div"))
saunage90Item.id = "saunage90Item"
saunage90Item.classList.add("toolElement")
saunage90Item.classList.add("gridItem")
let saunage90Text = saunage90Item.appendChild(document.createElement("h3"))
saunage90Text.id = "saunage90Text"
saunage90Text.classList.add("toolElement")
saunage90Text.innerText = "Saunage (90)"

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
let activeMassages = [];
let massages = null;
let massageTimes = []
let linesDrawn = [];
let massageDurations = [60, 75, 105]

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
    if (event.target.id == "mass90Item" || event.target.id == "mass90Text") {
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
    if (event.target.id == "saunage45Item" || event.target.id == "saunage45Text") {
        findBestSaunage(saunas, massages, 60)
        deactivateTool();
    }
    if (event.target.id == "saunage60Item" || event.target.id == "saunage60Text") {
        findBestSaunage(saunas, massages, 75)
        deactivateTool();
    }
    if (event.target.id == "saunage90Item" || event.target.id == "saunage90Text") {
        findBestSaunage(saunas, massages, 105)
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
    activeMassages = document.getElementsByClassName("NotAvailable")
    activeMassages = Array.from(activeMassages)
    for(let i = 0; i < activeMassages.length; i ++){
        if(activeMassages[i].dataset.dropDescription.includes("Massage")){
            continue;
        }
        else{
            activeMassages.splice(i, 1);
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
    for (let i = 0; i < floats.length; i++) {
        let floatTime = getAbsoluteTime(floats[i].dataset.dropDescription)
        //Priority 1 if nothing aligns
        if (!valueInArray(floatTime - 60, saunaTimes) && !valueInArray(floatTime - 60, massageTimes) && !valueInArray(floatTime - 75, massageTimes) && !valueInArray(floatTime - 105, massageTimes) && !valueInArray(floatTime + 90, massageTimes)) {
            floats[i].innerHTML = Priority(1)
        }
        //Priority 2 if singular sauna or massage aligns
        if (valueInArray(floatTime - 60, saunaTimes) || valueInArray(floatTime - 60, massageTimes) || valueInArray(floatTime - 75, massageTimes) || valueInArray(floatTime - 105, massageTimes) || valueInArray(floatTime + 90, massageTimes)) {
            floats[i].innerHTML = Priority(2)
        }

        //Priority 3 if aligns with single cwp
        for(let j = 0; j < massageDurations.length; j ++){
            //massage > sauna > float
            if(valueInArray(floatTime - 60 - massageDurations[j], massageTimes) && valueInArray(floatTime - 60, saunaTimes)){
                floats[i].innerHTML = Priority(3)
            }
            //sauna > massage > float
            if(valueInArray(floatTime - massageDurations[j] - 60, saunaTimes) && valueInArray(floatTime - massageDurations[j], massageTimes)){
                floats[i].innerHTML = Priority(3)
            }
            //sauna > float > massage
            if(valueInArray(floatTime - 60, saunaTimes) && valueInArray(floatTime + 90, massageTimes)){
                floats[i].innerHTML = Priority(3)
            }
        }

        //Priority 4 couples floatage aligns
        for(let j = 0; j < massageDurations.length; j ++){
            for(let k = 0; k < massageTimes.length; k ++){
                if(floatTime - massageDurations[j] == massageTimes[k]){
                    for(let l = 0; l < massageTimes.length; l++){
                        if(k != l){
                            if(massageTimes[k] == massageTimes[l]){
                                floats[i].innerHTML = Priority(4)
                            }
                        }
                    }
                }
            }
        }
        for (let j = 0; j < massageTimes.length; j++) {
            if (floatTime + 90 == massageTimes[j]) {
                for (let k = 0; k < massageTimes.length; k++) {
                    if (j != k) {
                        if (massageTimes[k] == massageTimes[j]) {
                            floats[i].innerHTML = Priority(4)
                        }
                    }
                }
            }
        }

        //Priority 5 ccwp aligns
        for(let j = 0; j < massageDurations.length; j ++){
            for(let k = 0; k < massageTimes.length; k ++){
                if(floatTime - massageDurations[j] == massageTimes[k]){
                    for(let l = 0; l < massageTimes.length; l++){
                        if(k != l){
                            if(massageTimes[k] == massageTimes[l]){
                                for(let o = 0; o < saunaTimes.length; o ++){
                                    if(saunaTimes[o] == floatTime - massageDurations[j] - 60){
                                        floats[i].innerHTML = Priority(5)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        for (let j = 0; j < massageTimes.length; j++) {
            if (floatTime + 90 == massageTimes[j]) {
                for (let k = 0; k < massageTimes.length; k++) {
                    if (j != k) {
                        if (massageTimes[k] == massageTimes[j]) {
                            for(let l = 0; l < saunaTimes.length; l++){
                                if(saunaTimes[l] == floatTime - 60){
                                    floats[i].innerHTML = Priority(5)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function findBestSauna(saunas) {
    for (let i = 0; i < saunas.length; i++) {
        let saunaTime = getAbsoluteTime(saunas[i].dataset.dropDescription)
        //Priority 1 if nothing aligns
        if (!valueInArray(saunaTime - 60, massageTimes) && !valueInArray(saunaTime - 75, massageTimes) && !valueInArray(saunaTime - 105, massageTimes) && !valueInArray(saunaTime + 60, floatTimes) && !valueInArray(saunaTime + 60, massageTimes)) {
            saunas[i].innerHTML = Priority(1)
        }
        //Priority 2 if singular sauna or massage aligns
        if (valueInArray(saunaTime - 60, massageTimes) || valueInArray(saunaTime - 75, massageTimes) || valueInArray(saunaTime - 105, massageTimes) || valueInArray(saunaTime + 60, floatTimes) || valueInArray(saunaTime + 60, massageTimes)) {
            saunas[i].innerHTML = Priority(2)
        }

        //Priority 3 if aligns with single cwp
        for(let j = 0; j < massageDurations.length; j ++){
            //massage > sauna > float
            if(valueInArray(saunaTime - massageDurations[j], massageTimes) && valueInArray(saunaTime + 60, floatTimes)){
                saunas[i].innerHTML = Priority(3)
            }
            //sauna > massage > float
            if(valueInArray(saunaTime + 60, massageTimes) && valueInArray(saunaTime + 60 + massageDurations[j], floatTimes)){
                saunas[i].innerHTML = Priority(3)
            }
            //sauna > float > massage
            if(valueInArray(saunaTime + 60, floatTimes) && valueInArray(saunaTime + 150, massageTimes)){
                saunas[i].innerHTML = Priority(3)
            }
        }

        //Priority 4 couples saunage aligns
        for(let j = 0; j < massageDurations.length; j ++){
            for(let k = 0; k < massageTimes.length; k ++){
                if(saunaTime - massageDurations[j] == massageTimes[k]){
                    for(let l = 0; l < massageTimes.length; l++){
                        if(k != l){
                            if(massageTimes[k] == massageTimes[l]){
                                saunas[i].innerHTML = Priority(4)
                            }
                        }
                    }
                }
            }
        }
        for (let j = 0; j < massageTimes.length; j++) {
            if (saunaTime + 60 == massageTimes[j]) {
                for (let k = 0; k < massageTimes.length; k++) {
                    if (j != k) {
                        if (massageTimes[k] == massageTimes[j]) {
                            saunas[i].innerHTML = Priority(4)
                        }
                    }
                }
            }
        }

        //Priority 5 ccwp aligns
        for(let j = 0; j < massageDurations.length; j ++){
            //massage > sauna > float
            for(let k = 0; k < massageTimes.length; k ++){
                if(saunaTime - massageDurations[j] == massageTimes[k]){
                    for(let l = 0; l < massageTimes.length; l++){
                        if(k != l){
                            if(massageTimes[k] == massageTimes[l]){
                                for(let o = 0; o < floatTimes.length; o ++){
                                    if(floatTimes[o] == saunaTime + 60){
                                        saunas[i].innerHTML = Priority(5)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //sauna > massage > float
            for(let k = 0; k < massageTimes.length; k ++){
                if(saunaTime + 60 == massageTimes[k]){
                    for(let l = 0; l < massageTimes.length; l++){
                        if(k != l){
                            if(massageTimes[k] == massageTimes[l]){
                                for(let o = 0; o < floatTimes.length; o ++){
                                    if(floatTimes[o] == saunaTime + 60 + massageDurations[j]){
                                        saunas[i].innerHTML = Priority(5)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //sauna > float > massage
            for(let k = 0; k < massageTimes.length; k ++){
                if(saunaTime + 150 == massageTimes[k]){
                    for(let l = 0; l < massageTimes.length; l++){
                        if(k != l){
                            if(massageTimes[k] == massageTimes[l]){
                                for(let o = 0; o < floatTimes.length; o ++){
                                    if(floatTimes[o] == saunaTime + 60){
                                        saunas[i].innerHTML = Priority(5)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function findBestMassage(massages, massageDuration) {
    for (let i = 0; i < massages.length; i++) {
        let massageTime = getAbsoluteTime(massages[i].dataset.dropDescription)
        if (massageTime % 60 == 0 || massageTime % 30 == 0) {
            if (noOverlap(getRoomNumber(massages[i].dataset.dropDescription), massageTime, massageTime + massageDuration)) {
                //Priority 1 if nothing aligns
                if (!valueInArray(massageTime - 60, saunaTimes) && !valueInArray(massageTime - 90, floatTimes) && !valueInArray(massageTime + massageDuration, saunaTimes) && !valueInArray(massageTime + massageDuration, floatTimes)) {
                    massages[i].innerHTML = Priority(1)
                }
                //Priority 2 if singular sauna or massage aligns
                if (valueInArray(massageTime - 60, saunaTimes) || valueInArray(massageTime - 90, floatTimes) || valueInArray(massageTime + massageDuration, saunaTimes) || valueInArray(massageTime + massageDuration, floatTimes)) {
                    massages[i].innerHTML = Priority(2)
                }
                //Priority 3 if aligns with single cwp
                for (let j = 0; j < massageDurations.length; j++) {
                    //massage > sauna > float
                    if (valueInArray(massageTime + massageDurations[j], saunaTimes) && valueInArray(massageTime + massageDurations[j] + 60, floatTimes)) {
                        massages[i].innerHTML = Priority(3)
                    }
                    //sauna > massage > float
                    if (valueInArray(massageTime - 60, saunaTimes) && valueInArray(massageTime + massageDurations[j], floatTimes)) {
                        massages[i].innerHTML = Priority(3)
                    }
                    //sauna > float > massage
                    if (valueInArray(massageTime - 150, saunaTimes) && valueInArray(massageTime - 90, floatTimes)) {
                        massages[i].innerHTML = Priority(3)
                    }
                }
                //Priority 4 couples saunage or floatage aligns
                for (let j = 0; j < massageDurations.length; j++) {
                    for (let k = 0; k < saunaTimes.length; k++) {
                        //sauna > massage
                        if (saunaTimes[k] == massageTime - 60) {
                            for (let l = 0; l < massageTimes.length; l++) {
                                if (i != l) {
                                    if (massageTime == massageTimes[l]) {
                                        massages[i].innerHTML = Priority(4)
                                    }
                                }
                            }
                        }
                        //massage > sauna
                        if (saunaTimes[k] == massageTime + massageDurations[j]) {
                            for (let l = 0; l < massageTimes.length; l++) {
                                if (i != l) {
                                    if (massageTime == massageTimes[l]) {
                                        massages[i].innerHTML = Priority(4)
                                    }
                                }
                            }
                        }
                    }
                    for (let k = 0; k < floatTimes.length; k++) {
                        //float > massage
                        if (floatTimes[k] == massageTime - 90) {
                            for (let l = 0; l < massageTimes.length; l++) {
                                if (i != l) {
                                    if (massageTime == massageTimes[l]) {
                                        massages[i].innerHTML = Priority(4)
                                    }
                                }
                            }
                        }
                        //massage > float
                        if (floatTimes[k] == massageTime + massageDurations[j]) {
                            for (let l = 0; l < massageTimes.length; l++) {
                                if (i != l) {
                                    if (massageTime == massageTimes[l]) {
                                        massages[i].innerHTML = Priority(4)
                                    }
                                }
                            }
                        }
                    }
                }
                //Priority 5 ccwp aligns
                for (let j = 0; j < massageDurations.length; j++) {

                    //massage > sauna > float
                    for (let k = 0; k < saunaTimes.length; k++) {
                        if (massageTime + massageDurations[j] == saunaTimes[k]) {
                            for (let l = 0; l < massageTimes.length; l++) {
                                if (i != l) {
                                    if (massageTimes[l] == massageTime) {
                                        for (let o = 0; o < floatTimes.length; o++) {
                                            if (floatTimes[o] == massageTime + massageDurations[j] + 60) {
                                                massages[i].innerHTML = Priority(5)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //sauna > massage > float
                    for (let k = 0; k < saunaTimes.length; k++) {
                        if (massageTime - 60 == saunaTimes[k]) {
                            for (let l = 0; l < massageTimes.length; l++) {
                                if (i != l) {
                                    if (massageTimes[k] == massageTime) {
                                        for (let o = 0; o < floatTimes.length; o++) {
                                            if (floatTimes[o] == massageTime + massageDurations[j]) {
                                                massages[i].innerHTML = Priority(5)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //sauna > float > massage
                    for (let k = 0; k < saunaTimes.length; k++) {
                        if (massageTime - 150 == saunaTimes[k]) {
                            for (let l = 0; l < massageTimes.length; l++) {
                                if (i != l) {
                                    if (massageTimes[i] == massageTime) {
                                        for (let o = 0; o < floatTimes.length; o++) {
                                            if (floatTimes[o] == massageTime - 90) {
                                                massages[i].innerHTML = Priority(5)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            massages[i].innerHTML = Priority(6)
        }
    }
}


function findBestFlauna(floats, saunas) {
    for (let i = 0; i < saunas.length; i++) {
        let saunaTime = getAbsoluteTime(saunas[i].dataset.dropDescription)
        for (let j = 0; j < floatTimes.length; j++) {
            if (floatTimes[j] == saunaTime + 60) {
                for (let k = 0; k < massageDurations.length; k++) {
                    //Priority 1 no massages before or after
                    if (!valueInArray(saunaTime - massageDurations[k], massageTimes) && !valueInArray(saunaTime + 150, massageTimes)) {
                        saunas[i].innerHTML = Priority(1)
                        floats[j].innerHTML = Priority(1)
                    }
                    //Priority 2 a massage before or after
                    if (valueInArray(saunaTime - massageDurations[k], massageTimes) || valueInArray(saunaTime + 150, massageTimes)) {
                        saunas[i].innerHTML = Priority(2)
                        floats[j].innerHTML = Priority(2)
                    }
                    //Priority 3 couples massage before or after
                    for (let l = 0; l < massageTimes.length; l++) {
                        // massage > sauna > float
                        if (saunaTime - massageDurations[k] == massageTimes[l]) {
                            for (let o = 0; o < massageTimes.length; o++) {
                                if (l != o) {
                                    if (massageTimes[l] == massageTimes[o]) {
                                        if (noOverlap(getRoomNumber(massages[l].dataset.dropDescription), massageTimes[l], massageTimes[l] + massageDurations[k]) && noOverlap(getRoomNumber(massages[o].dataset.dropDescription), massageTimes[o], massageTimes[o] + massageDurations[k])) {
                                            saunas[i].innerHTML = Priority(3)
                                            floats[j].innerHTML = Priority(3)
                                        }
                                    }
                                }
                            }
                        }
                        // sauna > float > massage
                        if (saunaTime + 150 == massageTimes[l]) {
                            for (let o = 0; o < massageTimes.length; o++) {
                                if (l != o) {
                                    if (massageTimes[l] == massageTimes[o]) {
                                        if (noOverlap(getRoomNumber(massages[l].dataset.dropDescription), massageTimes[l], massageTimes[l] + massageDurations[k]) && noOverlap(getRoomNumber(massages[o].dataset.dropDescription), massageTimes[o], massageTimes[o] + massageDurations[k])) {
                                            saunas[i].innerHTML = Priority(3)
                                            floats[j].innerHTML = Priority(3)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//Still needs work to prioritise couples saunage + ccwp
function findBestSaunage(saunas, massages, massageDuration){
    for(let i = 0; i < saunas.length; i ++){
        let saunaTime = getAbsoluteTime(saunas[i].dataset.dropDescription)
        for(let j = 0; j < massageTimes.length; j ++){
            if(massageTimes[j] == saunaTime + 60 || saunaTime == massageTimes[j] + massageDuration){
                for(let k = 0; k < floatTimes.length; k ++){
                    if(floatTimes[k] == massageTimes[j] + massageDuration || floatTimes[k] == saunaTime + 60){
                        saunas[i].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";
                        massages[j].innerHTML = "<div class='priority2'><h3 class='priorityTag'>Priority 2</h3></div>";
                    }
                    else{
                        saunas[i].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                        massages[j].innerHTML = "<div class='priority1'><h3 class='priorityTag'>Priority 1</h3></div>";
                    }
                }
            }
        }
    }
}

//Still needs work to prioritise couples saunage + ccwp
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

function getRoomNumber(description){
    description = description.split(" ")
    if(description.length == 8){
        return description[5]
    }
    if(description.length == 5)
    {
        return description[2]
    }
}

function noOverlap(roomNumber, massageStart, massageEnd){
    for(let i = 0; i < activeMassages.length; i ++){
        if(getRoomNumber(activeMassages[i].dataset.dropDescription) == roomNumber){
            if(massageStart < getAbsoluteTime(activeMassages[i].dataset.dropDescription) && massageEnd > getAbsoluteTime(activeMassages[i].dataset.dropDescription)){
                return false;
            }
        }
    }
    return true;
}
function Priority(num){
    return ''.concat('<div class=priority', num, '><h3 class="priorityTag">Priority', num, '</h3></div>')
}