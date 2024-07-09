let speech = new SpeechSynthesisUtterance();

// in order to change the voice
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];  
    // by default, the code above will speak in the (index 1) first voice that is available on the device

    //the code below is to display all the voices in the dropdown 
    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i));
};

// to make the voice we click on speak, the code below is responsible for that
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});