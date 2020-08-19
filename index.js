window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const songs = document.querySelectorAll(".songs div");
    const visual = document.querySelector(".visual");
    const colors = [
      "#444444",
      "#cac723",
      "#30ca6b",
      "#1a84c2",
      "#a929b4",
      "#e66114"
    ];
  
    songs.forEach((song, index) => {
      song.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubble(index);
      });
    });
  
    const createBubble = (index) => {
      //Create bubbles
      const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = 'jump 1s ease';
      bubble.addEventListener("animationend", function() {
        visual.removeChild(this);
      });
    };
  });