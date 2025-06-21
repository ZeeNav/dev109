const levels = [
    {
        image: "198aea24-1dd2-4023-836d-ced65dab72df.png",
        objects: [
            { name: "Bike", coords: "30,60,90,100" },
            { name: "Doll", coords: "160,45,200,100" }
        ]
    },
    {
        image: "58490852-f109-4135-9f60-86307c047900.png",
        objects: [
            { name: "Globe", coords: "180,120,220,160" },
            { name: "Frog", coords: "250,200,290,240" }
        ]
    },
    {
        image: "52585afc-8949-4a2d-9edc-f4db37b3f99e.png",
        objects: [
            { name: "Clock", coords: "230,30,260,60" },
            { name: "Camera", coords: "360,180,400,220" },
            { name: "Teacup", coords: "200,130,220,150" }
        ]
    }
];

let currentLevel = Math.floor(Math.random() * levels.length);
let foundItems = [];

const gameImage = document.getElementById("gameImage");
const itemList = document.getElementById("itemList");
const itemMap = document.getElementById("itemMap");

function loadLevel(level) {
    const data = levels[level];
    gameImage.src = data.image;
    itemList.innerHTML = "";
    itemMap.innerHTML = "";
    foundItems = [];

    data.objects.forEach(obj => {
        // Add to list
        const li = document.createElement("li");
        li.id = obj.name;
        li.textContent = obj.name;
        itemList.appendChild(li);

        // Add area
        const area = document.createElement("area");
        area.shape = "rect";
        area.coords = obj.coords;
        area.href = "#";
        area.alt = obj.name;
        area.addEventListener("click", () => foundItem(obj.name));
        itemMap.appendChild(area);
    });
}

function foundItem(name) {
    if (!foundItems.includes(name)) {
        foundItems.push(name);
        document.getElementById(name).style.textDecoration = "line-through";

        if (foundItems.length === levels[currentLevel].objects.length) {
            setTimeout(() => {
                if (confirm("You found all items! Play again?")) {
                    location.reload();
                }
            }, 500);
        }
    }
}

loadLevel(currentLevel);
