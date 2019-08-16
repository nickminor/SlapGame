let user = {
    health: 100,
    items: []
}
let healthElement = document.querySelector("#Health")

let items = {
    speed: {
        name: "speed",
        modifier: 1,
        description: "increases damage by one"
    },
    strength: {
        name: "strength",
        modifier: 5,
        description: "increases damage by five"
    },
    special: {
        name: "special",
        modifier: 10,
        description: "increases damage by ten"
    }
}

function addItem(item) {
    if (item == 'speed') {
        user.items.push(items.speed)
    }
    if (item == 'strength') {
        user.items.push(strength)
    }
    if (item == 'special') {
        user.items.push(special)
    }
}
function slap() {
    console.log("health", user.health)
    healthElement.textContent = "Health: " + user.health.toString()
}

function snacks() {
    user.health += 5
    console.log("health", user.health)
    healthElement.textContent = "Health: " + user.health.toString()
}

function punch() {
    user.health -= 5
    console.log("health", user.health)
    healthElement.textContent = "Health: " + user.health.toString()
}

function kick() {
    user.health -= 10
    console.log("health", user.health)
    healthElement.textContent = "Health: " + user.health.toString()
}

function restore() {
    user.health = 100
    console.log("health", user.health)
    healthElement.textContent = "Health: " + user.health.toString()
}