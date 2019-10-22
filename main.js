const playSongObj = document.getElementById('playSong');
const stopSongObj = document.getElementById('stopSong');
const pauseSongObj = document.getElementById('pauseSong');


const song = new Audio('song.mp3');

playSongObj.onclick = function () {

    song.play();
}

stopSongObj.onclick = function () {
    song.pause();
    song.currentTime = 0;
}

pauseSongObj.onclick = function () {
    song.pause();
}

let padArray =[];

padArray[0] = document.getElementById('pad1');
padArray[1] = document.getElementById('pad2');
padArray[2] = document.getElementById('pad3');
padArray[3] = document.getElementById('pad4');
padArray[4] = document.getElementById('pad5');
padArray[5] = document.getElementById('pad6');
padArray[6] = document.getElementById('pad7');
padArray[7] = document.getElementById('pad8');
padArray[8] = document.getElementById('pad9');

let soundpad = [];

soundpad[0] = new Audio('808_drum_kit/kicks/0015.wav');
soundpad[1] = new Audio('808_drum_kit/kicks/0018.wav');
soundpad[2] = new Audio('808_drum_kit/kicks/0017.wav');
soundpad[3] = new Audio('808_drum_kit/snares/0027.wav');
soundpad[4] = new Audio('808_drum_kit/snares/0020.wav');
soundpad[5] = new Audio('808_drum_kit/snares/0021.wav');
soundpad[6] = new Audio('808_drum_kit/percussion/0012.wav');
soundpad[7] = new Audio('808_drum_kit/percussion/0013.wav');
soundpad[8] = new Audio('808_drum_kit/percussion/0014.wav');

let recordNote = [];

padArray[0].onclick = function () {playTrack(0);recordNote[0]=1;}
padArray[1].onclick = function () {playTrack(1);recordNote[1]=1;}
padArray[2].onclick = function () {playTrack(2);recordNote[2]=1;}
padArray[3].onclick = function () {playTrack(3);recordNote[3]=1;}
padArray[4].onclick = function () {playTrack(4);recordNote[4]=1;}
padArray[5].onclick = function () {playTrack(5);recordNote[5]=1;}
padArray[6].onclick = function () {playTrack(6);recordNote[6]=1;}
padArray[7].onclick = function () {playTrack(7);recordNote[7]=1;}
padArray[8].onclick = function () {playTrack(8);recordNote[8]=1;}

function playTrack(x){
    padArray[x].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    soundpad[x].pause();
    soundpad[x].currentTime = 0;
    soundpad[x].play();
}

const padSelectorObj = document.getElementById('padSelector');

let selectedPad = 0;

padSelectorObj.onchange = function () {
    selectedPad = padSelectorObj.value;
    console.log('selected Pad = ' + padSelectorObj.value);
}

let sounds = '808_drum_kit/classic_808/0001.wav,808_drum_kit/classic_808/0002.wav,808_drum_kit/classic_808/0003.wav,808_drum_kit/classic_808/0004.wav,808_drum_kit/classic_808/0005.wav,808_drum_kit/classic_808/0006.wav,808_drum_kit/classic_808/0007.wav,808_drum_kit/classic_808/0008.wav,808_drum_kit/classic_808/0009.wav,808_drum_kit/classic_808/0010.wav,808_drum_kit/classic_808/0011.wav,808_drum_kit/classic_808/0012.wav,808_drum_kit/classic_808/0013.wav,808_drum_kit/classic_808/0014.wav,808_drum_kit/classic_808/0015.wav,808_drum_kit/classic_808/0016.wav,808_drum_kit/classic_808/0017.wav,808_drum_kit/classic_808/0018.wav,808_drum_kit/classic_808/0019.wav,808_drum_kit/classic_808/0020.wav,808_drum_kit/classic_808/0021.wav,808_drum_kit/classic_808/0022.wav,808_drum_kit/classic_808/long_kick.wav,808_drum_kit/hihats/0001.wav,808_drum_kit/hihats/0002.wav,808_drum_kit/hihats/0003.wav,808_drum_kit/hihats/0004.wav,808_drum_kit/hihats/0005.wav,808_drum_kit/hihats/0006.wav,808_drum_kit/hihats/0007.wav,808_drum_kit/hihats/0008.wav,808_drum_kit/hihats/0009.wav,808_drum_kit/hihats/0010.wav,808_drum_kit/hihats/0011.wav,808_drum_kit/hihats/0012.wav,808_drum_kit/hihats/0013.wav,808_drum_kit/hihats/0014.wav,808_drum_kit/hihats/0015.wav,808_drum_kit/hihats/0016.wav,808_drum_kit/hihats/0017.wav,808_drum_kit/hihats/0018.wav,808_drum_kit/hihats/0019.wav,808_drum_kit/hihats/0020.wav,808_drum_kit/hihats/0021.wav,808_drum_kit/hihats/0022.wav,808_drum_kit/hihats/0023.wav,808_drum_kit/hihats/0024.wav,808_drum_kit/hihats/0025.wav,808_drum_kit/hihats/0026.wav,808_drum_kit/hihats/0027.wav,808_drum_kit/hihats/0028.wav,808_drum_kit/hihats/0029.wav,808_drum_kit/hihats/0030.wav,808_drum_kit/hihats/0031.wav,808_drum_kit/hihats/0032.wav,808_drum_kit/hihats/0033.wav,808_drum_kit/hihats/0034.wav,808_drum_kit/hihats/0035.wav,808_drum_kit/hihats/0036.wav,808_drum_kit/hihats/0037.wav,808_drum_kit/hihats/0038.wav,808_drum_kit/hihats/0039.wav,808_drum_kit/hihats/0040.wav,808_drum_kit/hihats/0041.wav,808_drum_kit/hihats/0042.wav,808_drum_kit/hihats/0043.wav,808_drum_kit/hihats/0044.wav,808_drum_kit/kicks/0001.wav,808_drum_kit/kicks/0002.wav,808_drum_kit/kicks/0003.wav,808_drum_kit/kicks/0004.wav,808_drum_kit/kicks/0005.wav,808_drum_kit/kicks/0006.wav,808_drum_kit/kicks/0007.wav,808_drum_kit/kicks/0008.wav,808_drum_kit/kicks/0009.wav,808_drum_kit/kicks/0010.wav,808_drum_kit/kicks/0011.wav,808_drum_kit/kicks/0012.wav,808_drum_kit/kicks/0013.wav,808_drum_kit/kicks/0014.wav,808_drum_kit/kicks/0015.wav,808_drum_kit/kicks/0016.wav,808_drum_kit/kicks/0017.wav,808_drum_kit/kicks/0018.wav,808_drum_kit/kicks/0019.wav,808_drum_kit/kicks/0020.wav,808_drum_kit/kicks/0021.wav,808_drum_kit/kicks/0022.wav,808_drum_kit/kicks/0023.wav,808_drum_kit/kicks/0024.wav,808_drum_kit/kicks/0025.wav,808_drum_kit/kicks/0026.wav,808_drum_kit/kicks/0027.wav,808_drum_kit/kicks/0028.wav,808_drum_kit/kicks/0029.wav,808_drum_kit/kicks/0030.wav,808_drum_kit/kicks/0031.wav,808_drum_kit/kicks/0032.wav,808_drum_kit/kicks/0033.wav,808_drum_kit/kicks/0034.wav,808_drum_kit/kicks/0035.wav,808_drum_kit/kicks/0036.wav,808_drum_kit/kicks/0037.wav,808_drum_kit/kicks/0038.wav,808_drum_kit/kicks/0039.wav,808_drum_kit/kicks/0040.wav,808_drum_kit/percussion/0001.wav,808_drum_kit/percussion/0002.wav,808_drum_kit/percussion/0003.wav,808_drum_kit/percussion/0004.wav,808_drum_kit/percussion/0005.wav,808_drum_kit/percussion/0006.wav,808_drum_kit/percussion/0007.wav,808_drum_kit/percussion/0008.wav,808_drum_kit/percussion/0009.wav,808_drum_kit/percussion/0010.wav,808_drum_kit/percussion/0011.wav,808_drum_kit/percussion/0012.wav,808_drum_kit/percussion/0013.wav,808_drum_kit/percussion/0014.wav,808_drum_kit/percussion/0015.wav,808_drum_kit/percussion/0016.wav,808_drum_kit/percussion/0017.wav,808_drum_kit/percussion/0018.wav,808_drum_kit/percussion/0019.wav,808_drum_kit/percussion/0020.wav,808_drum_kit/percussion/0021.wav,808_drum_kit/percussion/0022.wav,808_drum_kit/percussion/0023.wav,808_drum_kit/percussion/0024.wav,808_drum_kit/snares/0001.wav,808_drum_kit/snares/0002.wav,808_drum_kit/snares/0003.wav,808_drum_kit/snares/0004.wav,808_drum_kit/snares/0005.wav,808_drum_kit/snares/0006.wav,808_drum_kit/snares/0007.wav,808_drum_kit/snares/0008.wav,808_drum_kit/snares/0009.wav,808_drum_kit/snares/0010.wav,808_drum_kit/snares/0011.wav,808_drum_kit/snares/0012.wav,808_drum_kit/snares/0013.wav,808_drum_kit/snares/0014.wav,808_drum_kit/snares/0015.wav,808_drum_kit/snares/0016.wav,808_drum_kit/snares/0017.wav,808_drum_kit/snares/0018.wav,808_drum_kit/snares/0019.wav,808_drum_kit/snares/0020.wav,808_drum_kit/snares/0021.wav,808_drum_kit/snares/0022.wav,808_drum_kit/snares/0023.wav,808_drum_kit/snares/0024.wav,808_drum_kit/snares/0025.wav,808_drum_kit/snares/0026.wav,808_drum_kit/snares/0027.wav,808_drum_kit/snares/0028.wav,808_drum_kit/snares/0029.wav,808_drum_kit/snares/0030.wav,808_drum_kit/snares/0031.wav,808_drum_kit/snares/0032.wav,808_drum_kit/snares/0033.wav,808_drum_kit/snares/0034.wav,808_drum_kit/snares/0035.wav,808_drum_kit/snares/0036.wav,808_drum_kit/snares/0037.wav,808_drum_kit/snares/0038.wav,808_drum_kit/snares/0039.wav,808_drum_kit/snares/0040.wav,808_drum_kit/snares/0041.wav,808_drum_kit/snares/0042.wav,808_drum_kit/snares/0043.wav,808_drum_kit/snares/0044.wav,808_drum_kit/snares/0045.wav,808_drum_kit/snares/0046.wav,808_drum_kit/snares/0048.wav,808_drum_kit/snares/0049.wav,808_drum_kit/snares/0050.wav,808_drum_kit/snares/0051.wav,808_drum_kit/snares/0052.wav,808_drum_kit/snares/0053.wav,808_drum_kit/snares/0054.wav,808_drum_kit/snares/0055.wav,808_drum_kit/snares/0056.wav,808_drum_kit/snares/0057.wav,808_drum_kit/snares/0058.wav,808_drum_kit/snares/0059.wav,808_drum_kit/snares/0060.wav,808_drum_kit/snares/0061.wav,808_drum_kit/snares/0044.wav,808_drum_kit/snares/0044.wav,808_drum_kit/snares/0044.wav,808_drum_kit/snares/0044.wav,808_drum_kit/snares/0044.wav,808_drum_kit/snares/0044.wav,808_drum_kit/snares/0044.wav,808_drum_kit/snares/0044.wav';
let soundAddressArray = sounds.split(',');

let soundNames = 'kick001,kick002,kick003,kick004,kick005,kick006,kick007,kick008,kick009,kick010,kick011,kick012,kick013,kick014,kick015,kick016,kick017,kick018,kick019,kick020,kick021,kick022,kick023,hihat001,hihat002,hihat003,hihat004,hihat005,hihat006,hihat007,hihat008,hihat009,hihat010,hihat011,hihat012,hihat013,hihat014,hihat015,hihat016,hihat017,hihat018,hihat019,hihat020,hihat021,hihat022,hihat023,hihat024,hihat025,hihat026,hihat027,hihat028,hihat029,hihat030,hihat031,hihat032,hihat033,hihat034,hihat035,hihat036,hihat037,hihat038,hihat039,hihat040,hihat041,hihat042,hihat043,hihat044,kick001,kick002,kick003,kick004,kick005,kick006,kick007,kick008,kick009,kick010,kick011,kick012,kick013,kick014,kick015,kick016,kick017,kick018,kick019,kick020,kick021,kick022,kick023,kick024,kick025,kick026,kick027,kick028,kick029,kick030,kick031,kick032,kick033,kick034,kick035,kick036,kick037,kick038,kick039,kick040,percussion001,percussion002,percussion003,percussion004,percussion005,percussion006,percussion007,percussion008,percussion009,percussion010,percussion011,percussion012,percussion013,percussion014,percussion015,percussion016,percussion017,percussion018,percussion019,percussion020,percussion021,percussion022,percussion023,percussion024,snare001,snare002,snare003,snare004,snare005,snare006,snare007,snare008,snare009,snare010,snare011,snare012,snare013,snare014,snare015,snare016,snare017,snare018,snare019,snare020,snare021,snare022,snare023,snare024,snare025,snare026,snare027,snare028,snare029,snare030,snare031,snare032,snare033,snare034,snare035,snare036,snare037,snare038,snare039,snare040,snare041,snare042,snare043,snare044,snare045,snare046,snare047,snare048,snare049,snare050,snare051,snare052,snare053,snare054,snare055,snare056,snare057,snare058,snare059,snare060,snare061,snare062,snare063,snare064';
let soundNameArray = soundNames.split(',');

console.log(soundNameArray);

// let selectedSound = '808_drum_kit/classic_808/0001.wav';

const soundSelectorObj = document.getElementById('soundSelector');

/* <option value="808_drum_kit/classic_808/0002.wav"></option> */

function createSoundSelector() {
    let allSoundsSelector = '';
    for (let i = 0; i < soundAddressArray.length; i++) {
        let stringHTML = `<option value="${i}">${soundNameArray[i]}</option>"`;
        allSoundsSelector += stringHTML;
    }
    soundSelectorObj.innerHTML = allSoundsSelector;
}

createSoundSelector();

soundSelectorObj.onchange = function () {
    selectedSound = soundSelectorObj.value;
    console.log('selected sound = ' + soundSelectorObj.value + '  SoundName= ' + soundNameArray[soundSelectorObj.value]);
}

const changeNowObj = document.getElementById('changeNOW');

changeNowObj.addEventListener('click', changeSound);

function changeSound() {
    soundpad[selectedPad] = new Audio(soundAddressArray[selectedSound]);
    let str = `pad${parseInt(selectedPad)+1}`;
    console.log(str);
    let paddy = document.getElementById(str);
    console.log('überschreibe ' + paddy + '  mit  ' + soundNameArray[selectedSound]);
    paddy.innerText = soundNameArray[selectedSound];

}

document.onkeydown = function (event) {
    console.log(event.keyCode);

    if (event.keyCode === 87) {
        padArray[0].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[0].pause();
        soundpad[0].currentTime = 0;
        soundpad[0].play();
        recordNote[0]=1;
        console.log('pad0=====>'+ recordNote);
    }
    if (event.keyCode === 69) {
        padArray[1].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[1].pause();
        soundpad[1].currentTime = 0;
        soundpad[1].play();
        recordNote[1]=1;
        console.log(recordNote);
    }
    if (event.keyCode === 82) {
        padArray[2].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[2].pause();
        soundpad[2].currentTime = 0;
        soundpad[2].play();
        recordNote[2]=1;
        console.log(recordNote);
    }
    if (event.keyCode === 65) {
        padArray[3].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[3].pause();
        soundpad[3].currentTime = 0;
        soundpad[3].play();
        recordNote[3]=1;
        console.log(recordNote);
    }
    if (event.keyCode === 83) {
        padArray[4].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[4].pause();
        soundpad[4].currentTime = 0;
        soundpad[4].play();
        recordNote[4]=1;
        console.log(recordNote);
    }
    if (event.keyCode === 68) {
        padArray[5].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[5].pause();
        soundpad[5].currentTime = 0;
        soundpad[5].play();
        recordNote[5]=1;
        console.log(recordNote);
    }
    if (event.keyCode === 89) {
        padArray[6].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[6].pause();
        soundpad[6].currentTime = 0;
        soundpad[6].play();
        recordNote[6]=1;
        console.log(recordNote);
    }
    if (event.keyCode === 88) {
        padArray[7].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[7].pause();
        soundpad[7].currentTime = 0;
        soundpad[7].play();
        recordNote[7]=1;
        console.log(recordNote);
    }
    if (event.keyCode === 67) {
        padArray[8].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        soundpad[8].pause();
        soundpad[8].currentTime = 0;
        soundpad[8].play();
        recordNote[8]=1;
        console.log(recordNote);
    }

}
/*
W = 87
E = 69
R = 82
A = 65
S = 83
D = 68
Y = 89
X = 88
C = 67
  */
//SEQUENCER ==========================

const inputSpeedObj = document.getElementById('speed');
const inputBeatObj = document.getElementById('beatSelector');
const inputNoteObj = document.getElementById('noteSelector');
const inputSTOPObj = document.getElementById('seqSTOP');
const inputPLAYObj = document.getElementById('seqPLAY');
const inputRECObj = document.getElementById('seqREC');
const speedIndicatorObj = document.getElementById('speedIndicator');
const sequencerObj = document.getElementById('sequencer');

var notesDivs = []; // visual model
let notes = []; // Data model
let playableNotes = []; // enthält nur die Noten die sichtbar sind un gespielt werden können

let sequencerSpeed = inputSpeedObj.value; // Sequencer Speed übernehmen
speedIndicator.innerHTML = sequencerSpeed;
let intervalVisibleStepDuration = 0;


let sequencerBeat = inputBeatObj.value; // Sequencer Beat übernehmen
console.log('BEAT = ' + sequencerBeat);

let sequencerNote = inputNoteObj.value; // Sequencer Note übernehmen
console.log('NOTE = ' + sequencerNote);

inputBeatObj.onchange = function () {
    sequencerBeat = inputBeatObj.value;
    console.log('BEAT = ' + sequencerBeat);
    recBtnObj.classList.remove('recordON');
    resetPlayRec();
    initNoteDivs();
}

inputNoteObj.onchange = function () {
    sequencerNote = inputNoteObj.value;
    console.log('NOTE = ' + sequencerNote);
    recBtnObj.classList.remove('recordON');
    resetPlayRec();
    initNoteDivs();
    
}

// Tracks

const track1Obj = document.getElementById('track1');
const track2Obj = document.getElementById('track2');
const track3Obj = document.getElementById('track3');
const track4Obj = document.getElementById('track4');
const track5Obj = document.getElementById('track5');
const track6Obj = document.getElementById('track6');
const track7Obj = document.getElementById('track7');
const track8Obj = document.getElementById('track8');
const track9Obj = document.getElementById('track9');



function deleteAllNotes() {
    console.log(notes);
    for (let i = notes.length - 1; i >= 0; i--) {
        console.log("i= " + i);

        console.log(track1Obj.lastChild);
        track1Obj.removeChild(track1Obj.lastChild);
        track2Obj.removeChild(track2Obj.lastChild);
        track3Obj.removeChild(track3Obj.lastChild);
        track4Obj.removeChild(track4Obj.lastChild);
        track5Obj.removeChild(track5Obj.lastChild);
        track6Obj.removeChild(track6Obj.lastChild);
        track7Obj.removeChild(track7Obj.lastChild);
        track8Obj.removeChild(track8Obj.lastChild);
        track9Obj.removeChild(track9Obj.lastChild);
        notes.length = 0;

    }
}

function createNotes() {


    //let notesCount = 4 * sequencerBeat * sequencerNote;
    let notesCount = 4 * 6 * 16; //maximale Auflösung

    for (let i = 0; i < notesCount; i++) {
        for (let j = 0; j < 9; j++) {
            const newNote = createNewElement('div', `${i}x${j}`, `noteDiv`, 'track', `${j}`, '');
            newNote.classList.add('64');
            if (i % 2 === 0) {
                newNote.classList.add('32');
            };
            if (i % 4 === 0) {
                newNote.classList.add('16');
            };
            if (i % 8 === 0) {
                newNote.classList.add('8');
            };
            if (i % 16 === 0) {
                newNote.classList.add('4');
            };

            newNote.onclick = function () {
                if (notes[i][j] != 1) {
                    notes[i][j] = 1;
                    newNote.classList.add('setNote');
                } else {
                    notes[i][j] = 0;
                    newNote.classList.remove('setNote');
                };
            }

            if (j === 0) {
                track1Obj.appendChild(newNote);
            } else if (j === 1) {
                track2Obj.appendChild(newNote);
            } else if (j === 2) {
                track3Obj.appendChild(newNote);
            } else if (j === 3) {
                track4Obj.appendChild(newNote);
            } else if (j === 4) {
                track5Obj.appendChild(newNote);
            } else if (j === 5) {
                track6Obj.appendChild(newNote);
            } else if (j === 6) {
                track7Obj.appendChild(newNote);
            } else if (j === 7) {
                track8Obj.appendChild(newNote);
            } else {
                track9Obj.appendChild(newNote);
            }
        }
        notes.push([
            [0],
            [0],
            [0],
            [0],
            [0],
            [0],
            [0],
            [0],
            [0]
        ]);
    }
    console.log(notes);

    initNoteDivs();
}

createNotes();



function initNoteDivs() {
    notesDivs = document.getElementsByClassName('noteDiv');
    console.log(notesDivs + ' notesDivs');
    for (let i = 0; i < notesDivs.length; i++) {
        //alle verstecken
        notesDivs[i].classList.add('hidden');

        //set default visible
        let idfyer = notesDivs[i].id.split('x');
        //console.log('DIV note=' + idfyer[0] + '   track=' + idfyer[1])
        if (notesDivs[i].classList.contains(sequencerNote) && idfyer[0] < 4 * 16 * sequencerBeat) {
            notesDivs[i].classList.toggle('hidden');
        }

        if (notesDivs[i].classList.contains('4')) {
            notesDivs[i].classList.add('quater');
        }

        if (idfyer[0] % (sequencerBeat * 16) === 0 && notesDivs[i].classList.contains('4')) {
            console.log('Bedingung1 ' + (sequencerBeat / 4) / sequencerNote);
            notesDivs[i].classList.add('one');
        } else {
            notesDivs[i].classList.remove('one');
        }
    }
    initTiming();
}

function createNewElement(ObjTag, ObjId, classObj, newAttr, newAttrValue, inHTML) {
    const newObj = document.createElement(ObjTag);
    newObj.classList.add(classObj);
    newObj.id = ObjId;
    if (newAttr != '') {
        newObj.setAttribute(newAttr, newAttrValue);
    }
    newObj.innerHTML = inHTML;
    return newObj;
}

// init TIMING =======================0



function findPlayables() {
    playableNotes = [];
    for (let i = 0; i < notes.length; i++) {
        if (!notesDivs[i].classList.contains('hidden')) {
            playableNotes.push(i);
        }
    }
}

// let intervalStepDuration = 60 / inputSpeedObj.value; //Dauer einer viertel Note [sec]
// intervalStepDuration = intervalStepDuration / 16 //Dauer einer 64stel Note [sec]
// intervalStepDuration = intervalStepDuration / 1000 //Dauer einer 64stel Note [millisec]

// let maxSteps = (sequencerBeat * 4) / 16; //Looplänge in 64stel
// let intervalStepWidth = playableNotes.length / maxSteps;
// console.log(intervalStepWidth); //Anzahl der 64stel pro step;

inputSpeedObj.onchange = function () {
    recBtnObj.classList.remove('recordON');
    resetPlayRec();
    initTiming();
}



function initTiming() {

    sequencerSpeed = inputSpeedObj.value;
    console.log('SPEED = ' + sequencerSpeed);
    speedIndicator.innerHTML = sequencerSpeed;
    findPlayables();

    let intervalStepDuration = 60 / inputSpeedObj.value; //Dauer einer viertel Note [sec]
    console.log(intervalStepDuration + ' 1/4sec');
    intervalStepDuration = intervalStepDuration / 16 //Dauer einer 64stel Note [sec]
    console.log(intervalStepDuration + ' 1/64sec');
    intervalStepDuration = intervalStepDuration * 1000 //Dauer einer 64stel Note [millisec]
    console.log(intervalStepDuration + ' 1/64ms');

    let maxSteps = sequencerBeat * 4 * 16; //Looplänge in 64stel
    console.log(maxSteps + ' maxSteps');
    console.log(playableNotes.length + ' steps');

    let intervalDuration = maxSteps * intervalStepDuration;
    console.log(intervalDuration); //Dauer des Loops;
    intervalVisibleStepDuration = intervalDuration / playableNotes.length;
}

// PLAY========================================

const playBtnObj = document.getElementById('seqPLAY');
const recBtnObj = document.getElementById('seqREC');
const stopBtnObj = document.getElementById('seqSTOP');
document.getElementById(`${playableNotes[0]}x${0}`).classList.toggle('play');
document.getElementById(`${playableNotes[0]}x${1}`).classList.toggle('play');
document.getElementById(`${playableNotes[0]}x${2}`).classList.toggle('play');
document.getElementById(`${playableNotes[0]}x${3}`).classList.toggle('play');
document.getElementById(`${playableNotes[0]}x${4}`).classList.toggle('play');
document.getElementById(`${playableNotes[0]}x${5}`).classList.toggle('play');
document.getElementById(`${playableNotes[0]}x${6}`).classList.toggle('play');
document.getElementById(`${playableNotes[0]}x${7}`).classList.toggle('play');
document.getElementById(`${playableNotes[0]}x${8}`).classList.toggle('play');


let intervalSEQ = null;
playBtnObj.onclick = function () {
    play(0);
}

function play(rec){
    
    if (intervalSEQ !== null) {
        return;
    }
    

    for (let i = 0; i < notesDivs.length; i++) {
        notesDivs[i].classList.remove('play');  
    }

    document.getElementById(`${playableNotes[0]}x${0}`).classList.toggle('play');
    document.getElementById(`${playableNotes[0]}x${1}`).classList.toggle('play');
    document.getElementById(`${playableNotes[0]}x${2}`).classList.toggle('play');
    document.getElementById(`${playableNotes[0]}x${3}`).classList.toggle('play');
    document.getElementById(`${playableNotes[0]}x${4}`).classList.toggle('play');
    document.getElementById(`${playableNotes[0]}x${5}`).classList.toggle('play');
    document.getElementById(`${playableNotes[0]}x${6}`).classList.toggle('play');
    document.getElementById(`${playableNotes[0]}x${7}`).classList.toggle('play');
    document.getElementById(`${playableNotes[0]}x${8}`).classList.toggle('play');

    let stepcounter1 = 1;
    let stepcounter2 = 0;
    recordNote = [0,0,0,0,0,0,0,0,0];
    

    intervalSEQ = setInterval(
        function () {

            
            if (stepcounter1 >= playableNotes.length) {
                stepcounter1 =0;
            }
            if (stepcounter2 >= playableNotes.length) {
                stepcounter2 =0;
            }
            //console.log(stepcounter1 + '---' + stepcounter2);
            console.log(recordNote);

            for(let i = 0; i < 9; i++){
                let tempNote = document.getElementById(`${playableNotes[stepcounter1]}x${i}`);
                tempNote.classList.toggle('play');
                if(tempNote.classList.contains('setNote')){playTrack(i)};
            }
            

            for(let i = 0; i < 9; i++){
                let tempNote = document.getElementById(`${playableNotes[stepcounter2]}x${i}`);
                tempNote.classList.toggle('play');
                if(rec === 1 && recordNote[i] === 1){
                    tempNote.classList.add('setNote');
                    notes[playableNotes[stepcounter2]][i] = 1;
                }
            }
            recordNote = [0,0,0,0,0,0,0,0,0];
            stepcounter1++;
            stepcounter2++;
        },

        intervalVisibleStepDuration);
}

stopBtnObj.onclick = function () {
    recBtnObj.classList.remove('recordON');
    resetPlayRec();
}

function resetPlayRec(){
        clearInterval(intervalSEQ);
        intervalSEQ = null;
}

// RECORD =======================================

//recordNote[0]=1;

recBtnObj.onclick = function () {
    recordNote = [0,0,0,0,0,0,0,0,0];
    recBtnObj.classList.add('recordON');
    play(1);
}