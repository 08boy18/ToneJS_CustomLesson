// const player = new Tone.Player("sounds/kick-acoustic02.wav").toDestination() // Creates a beat, sends it to speakers
// player.autostart = true;


// Find 6 sound files that you want to work with and replace them in this object
let sounds = {
    1: "sounds/clap-808.wav",
    2: "sounds/hihat-analog.wav",
    3: "sounds/hihat-plain.wav",
    4: "sounds/kick-cultivator.wav",
    5: "sounds/tom-acoustic01.wav",
    6: "sounds/snare-smasher.wav"
}


// Grab all of our checkboxes in the DOM
let boxes = document.querySelectorAll(".beatBox"); // Array of our checkbox elements

// Track currently playing audios:
let currentPlayers = {}; 

boxes.forEach(box => {

    let soundProperty = box.getAttribute("data-sound") // Now a number

    // Access a "sound/blank blank" using our soundProperty
    let validSound = sounds[`${soundProperty}`] // Will represent out sound path

    box.addEventListener("change", () => {

        // "change" --> checked or unchecked
            // We check for which change

        if(box.checked){

            // Start playing
            // Creare a player (new Tone), add a respective sound (diff for each box)
            let player = new Tone.Player(validSound).toDestination();

            

            // We want the beat to loop infinitely until it's unchecked
            player.loop = true;
            player.autostart = true; // Start the sound
            currentPlayers[soundProperty] = player; // Once audio is playing, it will be added to currentPlayers object

        }
        else{

            // Stop playing
            let player = currentPlayers[soundProperty]; // "sounds/blahblah.wav"
            player.stop();
            delete player;

        }

    })

})