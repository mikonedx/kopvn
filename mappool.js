const Qualifiers = [
    {
        id: 1,
        name: "raputa",
        diff: "13+",
        diffName: "Expert",
        img: "https://silentblue.remywiki.com/images/thumb/2/24/raputa.png/300px-raputa.png",
    },
    {
        id: 2,
        name: "Straight into the lights",
        diff: "14+",
        diffName: "Master",
        img: "https://silentblue.remywiki.com/images/thumb/8/89/Straight_into_the_lights.png/300px-Straight_into_the_lights.png",
    },
    {
        id: 1,
        name: "系ぎて",
        diff: "15",
        diffName: "ReMaster",
        img: "https://silentblue.remywiki.com/images/thumb/f/ff/Tsunagite.png/300px-Tsunagite.png",
    },
];

const songQuery = document.querySelector("#songQuery");

function createSong(item) {
	let div_item = document.createElement("div");
    div_item.setAttribute("class", `song ${item.diffName}` )
	div_item.innerHTML = `
    <div class="song-image">
        <div class="diff"><p>${item.diff}</p></div>
        <img src="${item.img}" alt="" class="display">
        
    </div>
    <div class="song-content">
        <div class="song-name"><p>${item.name}</p></div>
        
    </div>
    `;
	return div_item
}

function handleSwitch(round) {
	let currentActive = document.querySelector(".active-page");
	currentActive.classList.remove("active-page");
	let nowActive = document.querySelector("#" + round);
	nowActive.classList.add("active-page");
	
}

function handleGetSong(round){
    getSong(round)
}

function getSong(data) {
    songQuery.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const element = createSong(data[i]);
        songQuery.appendChild(element)
    }
}

function run() {
    getSong(Qualifiers);
    
}

run()