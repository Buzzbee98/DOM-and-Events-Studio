// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoffBtn = null;
let currentFlightStatus = null;
let shuttleBackground = null;
let shuttleHeight = null;
let landingBtn = null;
let rocket = null;
let rocketStyle = null

function init() {
    takeoffBtn = document.getElementById('takeoff');
    currentFlightStatus = document.getElementById('flightStatus');
    shuttleBackground = document.getElementById('shuttleBackground');
    shuttleHeight = document.getElementById('spaceShuttleHeight');
    landingBtn = document.getElementById('landing');
    rocket = document.getElementById('rocket');
    rocketStyle = window.getComputedStyle(rocket);
}

function takeoff() {
    let shuttleReady = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (shuttleReady) {
        currentFlightStatus.innerHTML = 'Shuttle in flight.';
        shuttleBackground.style.backgroundColor = 'blue';
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    }
}

function landing() {
    alert("The shuttle is landing. Landing gear engaged.");
    currentFlightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = '0';
    rocket.style.top = '250px';
    rocket.style.right = '0px';
}

function abort() {
    let abortReady = window.confirm('Confirm that you want to abort the mission.');
    if (abortReady) {
        currentFlightStatus.innerHTML = 'Mission aborted.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        rocket.style.top = '250px';
        rocket.style.right = '0px';
    }
}

function stayInside(direction) {
    let rocketRect = rocket.getBoundingClientRect()
    let backgroundRect = shuttleBackground.getBoundingClientRect();

    switch (direction) {
        case 'up':
            if (rocketRect.top < backgroundRect.top + 10) {
                console.log("test")
                return false;
            }
            return true;
            break;
        case 'down':
            if (rocketRect.bottom > backgroundRect.bottom - 10) {
                return false;
            }
            return true;
            break;
        case 'left':
            if (rocketRect.left < backgroundRect.left - 10) {
                return false;
            }
            return true;
            break;
        case 'right':
            if (rocketRect.right > backgroundRect.right + 10) {
                return false;
            }
            return true;
            break;
        default:
            return true;
    }
}

function up() {
    if (stayInside('up')) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        let rocketPositionString = rocketStyle.getPropertyValue('top');
        let rocketPositionNum = Number(rocketPositionString.slice(0, rocketPositionString.length - 2))
        rocket.style.top = rocketPositionNum - 10 + 'px'
    }
}

function down() {
    if (stayInside('down')) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
        let rocketPositionString = rocketStyle.getPropertyValue('top');
        let rocketPositionNum = Number(rocketPositionString.slice(0, rocketPositionString.length - 2))
        rocket.style.top = rocketPositionNum + 10 + 'px'
    }
}

function left() {
    if (stayInside('left')) {
        let rocketPositionString = rocketStyle.getPropertyValue('right');
        let rocketPositionNum = Number(rocketPositionString.slice(0, rocketPositionString.length - 2))
        rocket.style.right = rocketPositionNum + 10 + 'px'
    }
}

function right() {
    if (stayInside('right')) {
        let rocketPositionString = rocketStyle.getPropertyValue('right');
        let rocketPositionNum = Number(rocketPositionString.slice(0, rocketPositionString.length - 2))
        rocket.style.right = rocketPositionNum - 10 + 'px'
    }
}

window.onload = init;