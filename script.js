let flowerCount = 0;
const flowerCountDisplay = document.getElementById('flowerCount');
const garden = document.getElementById('garden');
const catContainer = document.getElementById('catContainer');
const quoteCard = document.getElementById('quoteCard');
const quoteMessage = document.getElementById('quoteMessage');
const quoteImage = document.getElementById('quoteImage');
const imageCard = document.getElementById('imageCard');
const userFeelingSelect = document.getElementById('userFeeling');
const playMusicImage = document.getElementById('play-music-image');
const musicButton = document.getElementById('musicButton');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

const quoteImages = {
  happy: 'happy.jpg',
  sad: '3 happy cats.jpg',
  tired: 'tired.jpg',
  confused: 'confused.jpg',
  excited: 'excited.jpg',
  nothing: 'flower2.jpg'
};

function createFlower(x, y) {
  const flowerImage = document.createElement('img');
  flowerImage.src = 'flower1.png';
  flowerImage.style.position = 'absolute';
  flowerImage.style.width = '50px';
  flowerImage.style.left = `${x - 25}px`;
  flowerImage.style.top = `${y - 25}px`;
  garden.appendChild(flowerImage);
}

function handleTap(event) {
    if (flowerCount < 25) {
        flowerCount++;
        flowerCountDisplay.textContent = `Flowers: ${flowerCount}`;

        const x = event.clientX - garden.getBoundingClientRect().left;
        const y = event.clientY - garden.getBoundingClientRect().top;

        createFlower(x, y);

        if (flowerCount === 25) {
            stopFloatingIcon(); // ✨ Stop the floating flower
            showCat();
        }
    }
}
  
  const floatingIcon = document.getElementById('floatingIcon');
  let gardenWidth = garden.offsetWidth;
  let gardenHeight = garden.offsetHeight;
  
  // Function to move the flower randomly
  function moveFloatingIcon() {
      const x = Math.random() * (gardenWidth - 40); // 40px buffer
      const y = Math.random() * (gardenHeight - 40);
  
      floatingIcon.style.left = `${x}px`;
      floatingIcon.style.top = `${y}px`;
  }
  
  // Move the flower every 2 seconds
  let floatInterval = setInterval(moveFloatingIcon, 2000);
  
  // Stop floating when flower count is 25
  function stopFloatingIcon() {
      clearInterval(floatInterval);
      floatingIcon.style.display = 'none';
  }

  
function showCat() {
    garden.style.display = 'none';
    flowerCountDisplay.style.display = 'none';
    playMusicImage.style.display = 'none';
  
    // Show the container and add custom content
    catContainer.innerHTML = `
      <p>Congratulations! You've grown 25 flowers!</p>
      <img src="happy2.png" alt="Celebration Image" style="width: 200px; margin-top: 10px;" />
      <p style="font-weight: 600; font-size: 22px; margin-top: 15px; color: #d66baa; font-family: 'Georgia', serif; letter-spacing: 1px;"> Happy Birthday Bloom </p>
    `;
    catContainer.classList.remove('hidden');
  
    // After short delay, show dropdown
    setTimeout(() => {
      catContainer.classList.add('hidden');
      userFeelingSelect.classList.remove('hidden');
    }, 4000); // Increased delay slightly for user to read the message
  }
  

userFeelingSelect.addEventListener('change', () => {
  const feeling = userFeelingSelect.value;
  let quote = "";

  switch (feeling) {
    case "happy":
      quote = "You deserve moments of unexplainable joy. Let them find you like sunlight through a library window.";
      quoteImage.src = quoteImages.happy;
      break;
    case "sad":
      quote = "Perhaps sadness is just love turned inside out, aching to be seen.\n\nIf you have the three of us, you don’t need to be sad. Just come to us—we can have ice cream together or watch a movie. Let’s throw everything away for today and just be together. Call me nowww.";
      quoteImage.src = quoteImages.sad;
      break;
    case "tired":
      quote = "You are not lazy; you are allowed to rest. Even the moon disappears for a while.";
      quoteImage.src = quoteImages.tired;
      break;
    case "confused":
      quote = "You do not need to be certain to be brave. Wander through the fog like a poet searching for metaphors.";
      quoteImage.src = quoteImages.confused;
      break;
    case "excited":
      quote = "Write your joy into the sky like a storm of golden ink. The world is yours tonight.";
      quoteImage.src = quoteImages.excited;
      break;
    case "nothing":
      quote = "Even in stillness, you are becoming. Silence is not empty—it’s the sound of your soul breathing.";
      quoteImage.src = quoteImages.nothing;
      break;
    default:
      quote = "Please select an emotion.";
  }


  quoteMessage.textContent = quote;

  // Switch to new page
  page1.classList.add('hidden');
  page2.classList.remove('hidden');
});

let backgroundMusic;

function toggleMusic() {
  if (!backgroundMusic) {
    backgroundMusic = new Audio('lofi-music.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.play();
  } else {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }
  
}

playMusicImage.addEventListener('click', toggleMusic);
musicButton.addEventListener('click', toggleMusic);
