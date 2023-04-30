window.addEventListener("load", () => {
    // creating constants for sounds, using .sound, as given to class in HTML file to audio tags
    const sounds = document.querySelectorAll(".sound");
    //using .layout div to select all divs in layout class
    const layout = document.querySelectorAll(".layout div");

    //making the buttons play the specific sounds when clicked on them
    layout.forEach((box, index) => {
        box.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});