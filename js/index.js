const cromaticScaleObjects = [
    key0 = {
        key : 'C',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key1 = {
        key : 'C#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key2 = {
        key : 'D',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key3 = {
        key : 'D#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key4 = {
        key : 'E',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key5 = {
        key : 'F',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key6 = {
        key : 'F#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key7 = {
        key : 'G',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key8 = {
        key : 'G#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key9 = {
        key : 'A',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key10 = {
        key : 'A#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key11 = {
        key : 'B',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key12 = {
        key : 'C',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key13 = {
        key : 'C#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key14 = {
        key : 'D',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key15 = {
        key : 'D#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key16 = {
        key : 'E',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key17 = {
        key : 'F',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key18 = {
        key : 'F#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key19 = {
        key : 'G',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key20 = {
        key : 'G#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key21 = {
        key : 'A',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    },
    key22 = {
        key : 'A#',
        backgroundColor : 'hsl(0,0%,0%)',
        color: 'hsl(0,100%,100%)'
    },
    key23 = {
        key : 'B',
        backgroundColor : 'hsl(0,100%,100%)',
        color : 'hsl(0,0%,0%)'
    }
]

const modesObjects = [
    mode0 = {
        mode : 'Jonico',
        backgroundColor : 'hsl(60,100%,50%)',
        color : 'hsl(60,100%,10%)',
        bodyBackgroundColor : 'hsl(60,100%,90%)'
    },
    mode1 = {
        mode : 'Dorico',
        backgroundColor : 'hsl(210,100%,50%)',
        color : 'hsl(210,100%,10%)',
        bodyBackgroundColor : 'hsl(210,100%,90%)'
    },
    mode2 = {
        mode : 'Frigio',
        backgroundColor : 'hsl(240,100%,25%)',
        color : 'hsl(240,100%,90%)',
        bodyBackgroundColor : 'hsl(240,100%,90%)'
    },
    mode3 = {
        mode : 'Lidio',
        backgroundColor : 'hsl(60,100%,75%)',
        color : 'hsl(60,100%,10%)',
        bodyBackgroundColor : 'hsl(60,100%,90%)'
    },
    mode4 = {
        mode : 'Mixolidio',
        backgroundColor : 'hsl(30,100%,50%)',
        color : 'hsl(30,100%,10%)',
        bodyBackgroundColor : 'hsl(30,100%,90%)'
    },
    mode5 = {
        mode : 'Eolico',
        backgroundColor : 'hsl(240,100%,50%)',
        color : 'hsl(240,100%,10%)',
        bodyBackgroundColor : 'hsl(240,100%,90%)'
    },
    mode6 = {
        mode : 'Locrio',
        backgroundColor : 'hsl(300,100%,25%)',
        color : 'hsl(300,100%,90%)',
        bodyBackgroundColor : 'hsl(300,100%,90%)'
    }
]

const modesIntervals = [
    [0,2,2,1,2,2,2,1],
    [0,2,1,2,2,2,1,2],
    [0,1,2,2,2,1,2,2],
    [0,2,2,2,1,2,2,1],
    [0,2,2,1,2,2,1,2],
    [0,2,1,2,2,1,2,2],
    [0,1,2,2,1,2,2,2]
]

const intervalsDif = [
    [0,0,2,4,5,7,9],
    [0,0,2,3,5,7,9],
    [0,0,1,3,5,7,8],
    [0,0,2,4,6,7,9],
    [0,0,2,4,5,7,9],
    [0,0,2,3,5,7,8],
    [0,0,1,3,5,6,8]
]

/* date object */
const date = new Date();
const actualDay = date.getDay() - 1;
const actualMonth = date.getMonth();

/* DOM */
const body = document.getElementById('body');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const ul = document.getElementById('ul');
const keyModeContainer = document.getElementById('key-mode_container');
const keyContainers = document.getElementsByClassName('key_containers');
let keyContainersLength = keyContainers.length;

/* styles */
body.style.backgroundColor = modesObjects[actualDay].bodyBackgroundColor;
header.style.backgroundColor = modesObjects[actualDay].backgroundColor;
header.style.color = modesObjects[actualDay].color;
keyModeContainer.style.backgroundColor = modesObjects[actualDay].backgroundColor;
keyModeContainer.style.color = modesObjects[actualDay].color;

/* text content */
keyModeContainer.textContent = cromaticScaleObjects[actualMonth].key + ' ' + modesObjects[actualDay].mode;


for (let i = 0; i < keyContainersLength; i++) {

    keyContainers[i].textContent = cromaticScaleObjects[actualMonth + modesIntervals[actualDay][i] + intervalsDif[actualDay][i]].key;
    keyContainers[i].style.backgroundColor = cromaticScaleObjects[actualMonth + modesIntervals[actualDay][i] + intervalsDif[actualDay][i]].backgroundColor;
    keyContainers[i].style.color = cromaticScaleObjects[actualMonth + modesIntervals[actualDay][i] + intervalsDif[actualDay][i]].color;

}