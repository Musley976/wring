const ringModel = document.getElementById('ringModel');
const proposalText = document.getElementById('proposal-text');
const yesBtn = document.getElementById('yes-button');
const music = document.getElementById('bg-music');
const hearts = document.querySelectorAll('.easter-heart');
const tapHint = document.querySelector('.tap-hint');

let started = false;

ringModel.addEventListener('click', () => {
  if (started) return;
  started = true;

  if (tapHint) tapHint.style.display = 'none';

  music.volume = 0;
  music.play();
  const fadeIn = setInterval(() => {
    if (music.volume < 0.6) {
      music.volume += 0.05;
    } else {
      clearInterval(fadeIn);
    }
  }, 300);

  const lines = [
    "Main hamesha sochta tha...",
    "Kya main kabhi kisi se itna pyaar kar paunga?",
    "Phir tum aayi — aur sab kuch badal gaya 💖",
    "Teri hansi meri zindagi ka sabab ban gayi...",
    "Ab har dua sirf tere naam se shuru hoti hai...",
    "Aur aaj sirf ek sawal reh gaya hai —",
    "Kya tum meri zindagi bano gi? 💍"
  ];

  let index = 0;
  proposalText.classList.remove('hidden');

  const typer = setInterval(() => {
    proposalText.innerText = lines[index];
    proposalText.style.animation = 'fadeInText 1s forwards';
    index++;

    if (index >= lines.length) {
      clearInterval(typer);
      showYesButton();
      revealHearts();
    }
  }, 4000);
});

function showYesButton() {
  yesBtn.classList.remove('hidden');
  yesBtn.addEventListener('click', () => {
    alert("Tumne 'Haan' bola... ab main zindagi bhar sirf tumhara hoon 💘");
  });
}

function revealHearts() {
  hearts.forEach((heart, i) => {
    heart.style.display = 'block';
    heart.addEventListener('click', () => {
      const surpriseLines = [
        "Tum meri aankhon ka noor ho... ✨",
        "Main sirf tum mein hi poora hoon 😭",
        "Har pal tumhare saath ek nayi zindagi jaisa hai 💗",
        "Tere naam ki dhun mere dil mein roz bajti hai 🎶",
        "Tu hi meri har kahaani ka 'hamesha' hai 🌸"
      ];
      alert(surpriseLines[i % surpriseLines.length]);
    });
  });
}
