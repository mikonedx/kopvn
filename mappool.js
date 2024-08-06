const Qualifiers = [
    {
        id: 1,
        name: "Mjölnir",
        artist: "xi",
        diff: "12+",
        diffName: "Expert",
        img: "./Assets/image/Mjölnir.png",
    },
    {
        id: 2,
        name: "Trrricksters!!",
        artist: "s-don vs. 翡乃イスカ",
        diff: "12+",
        diffName: "Expert",
        img: "./Assets/image/Trrricksters.png",
    },
    {
        id: 3,
        name: "Metamorphosism",
        artist: "削除",
        diff: "12+",
        diffName: "Expert",
        img: "./Assets/image/Metamorphosism.png",
    },
];

const Round16 = [
    {
        id: 1,
        name: "Λzure Vixen",
        artist: "Camellia",
        diff: "13",
        diffName: "Expert",
        img: "./Assets/image/Azure.png",
    },
    {
        id: 2,
        name: "系ぎて",
        artist: "rintaro soma",
        diff: "13+",
        diffName: "Expert",
        img: "./Assets/image/Tsunagite.png",
    },
    {
        id: 3,
        name: "MAGENTA POTION",
        artist: "EmoCosine",
        diff: "13+",
        diffName: "Master",
        img: "./Assets/image/Magenta.png",
    },
];

const Round8 = [
    {
        id: 1,
        name: "Alice's Suitcase",
        artist: "Endorfin.",
        diff: "13+",
        diffName: "Master",
        img: "./Assets/image/Alice.png",
    },
    {
        id: 2,
        name: "folern",
        artist: "ぬゆり",
        diff: "13+",
        diffName: "Master",
        img: "./Assets/image/folern.png",
    },
    {
        id: 3,
        name: "バグ",
        artist: "かいりきベア",
        diff: "13+",
        diffName: "ReMaster",
        img: "./Assets/image/Bug.png",
    },
];

const Quarterfinals = [
    {
        id: 1,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
    {
        id: 2,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
    {
        id: 3,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
];

const Semifinals = [
    {
        id: 1,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
    {
        id: 2,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
    {
        id: 3,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
];

const GFinals = [
    {
        id: 1,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
    {
        id: 2,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
    {
        id: 3,
        name: "?",
        artist: "?",
        diff: "?",
        diffName: "Master",
        img: "https://png.pngtree.com/png-clipart/20220614/original/pngtree-question-mark-and-background-png-image_8029545.png",
    },
];

const songQuery = document.querySelector("#songQuery");

function createSong(item) {
	let div_item = document.createElement("div");
    div_item.setAttribute("class", `song ${item.diffName} fadeIn-item` )
	div_item.innerHTML = `
    <div class="song-image">
        <div class="diff"><p>${item.diff}</p></div>
        <img src="${item.img}" alt="" class="display">
        
    </div>
    <div class="song-content">
        <div class="song-name"><p>${item.name}</p></div>
        <div class="song-artist"><p>${item.artist}</p></div>
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
    
    fadeOutDivs()
    setTimeout(() => {
        getSong(round)
        fadeInDivs()
    }, 800); // Delay each item by 500ms multiplied by its index
    
}

function getSong(data) {
    songQuery.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const element = createSong(data[i]);
        songQuery.appendChild(element)
    }
}

function fadeOutDivs() {
    const song = document.querySelectorAll("#songQuery .song")
    song.forEach((item) =>{
        
        item.classList.remove("fadeIn-item")
        item.classList.add("fadeOut-item")
    })
    
    const items = document.querySelectorAll('#songQuery .fadeOut-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 0;
            item.style.animation = "fadeOut 800ms ease-out forwards";
        }, index * 100 + 100); // Delay each item by 500ms multiplied by its index
    });
}

function fadeInDivs() {
    const items = document.querySelectorAll('#songQuery .fadeIn-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.animation = "fadeIn 800ms ease-out forwards";
        }, index * 100 + 100); // Delay each item by 500ms multiplied by its index
    });
}

function run() {
    getSong(Qualifiers);
    fadeInDivs()
}

run()