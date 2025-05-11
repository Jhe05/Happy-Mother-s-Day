function showFlowers() {
    const flowerEmojis = ["🌸", "🌷", "🌹", "🌻", "💐"];
    const total = 30;
  
    for (let i = 0; i < total; i++) {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      
      // Set random starting position for each flower at the bottom of the screen
      flower.style.left = Math.random() * 100 + "vw";  // Random horizontal position
      flower.style.bottom = "0";  // Start at the bottom of the screen
      flower.style.fontSize = (Math.random() * 20 + 20) + "px"; // Random size
      flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
  
      flowerContainer.appendChild(flower);
  
      // Start animation with opacity and floating effect after click
      setTimeout(() => {
        flower.style.opacity = "1";  // Make the flower visible
        flower.style.animation = "floatUp 5s linear forwards"; // Start floating effect
      }, 100);
  
      setTimeout(() => {
        flower.remove();  // Remove flower after animation completes
      }, 6000);
    }
  }
  