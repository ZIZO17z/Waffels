const jokes = [
    "Why did the waffle go to therapy? It couldn't handle the pressure!",
    "I told my waffle a joke… it cracked up and split down the middle!",
    "You butter believe I'm delicious!",
    "Waffle puns are waffle-ly funny, aren't they?",
    "Never trust a pancake. They're just flat waffles!",
    "Why don't waffles ever get lonely? Because they're always in a grid!",
    "What did the waffle say to the pancake? 'You're flat-out boring!'",
    "How do waffles flirt? They give you batter eyes!",
    "Why was the waffle so good at baseball? It always hit a grid-dle!",
    "What's a waffle's favorite music? Syrup-hop!"
];

const gifs = [
    "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
    "https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif",
    "https://media.giphy.com/media/3ohs84j9F5pNfT2FBe/giphy.gif",
    "https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif",
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
    "https://media.giphy.com/media/3o7TKMt1VVNMkI2rLy/giphy.gif",
    "https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif",
    "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
    "https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif",
    "https://media.giphy.com/media/11HeubLHnQJSAU/giphy.gif"
];

const facts = [
    "In 1964, waffles were served with fried chicken at a jazz club in Harlem, and it blew minds!",
    "Belgian waffles were introduced to America at the 1962 Seattle World's Fair.",
    "NASA tested a waffle iron as a potential Martian food machine. (Just kidding... or are we?)",
    "The ancient Greeks used two metal plates over a fire to cook waffles. Real OGs.",
    "The word 'waffle' comes from the Dutch word 'wafel'. Yummy etymology!",
    "The world's largest waffle was made in the Netherlands in 2013 - it was 8 feet long!",
    "There's a Waffle House Index used by FEMA to determine disaster severity based on restaurant closures.",
    "Brussels waffles and Liege waffles are different - one's rectangular, one's oval with caramelized sugar!",
    "The first U.S. patent for a waffle iron was issued in 1869 to Cornelius Swartwout of Troy, NY.",
    "International Waffle Day is celebrated on March 25th - mark your calendars!"
];


document.getElementById("jokeBtn").addEventListener("click", () => {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("jokeBox").textContent = random;
    createConfetti();
    document.getElementById("jokeBox").classList.add("animate__animated", "animate__pulse");
    setTimeout(() => {
        document.getElementById("jokeBox").classList.remove("animate__animated", "animate__pulse");
    }, 1000);
});


document.getElementById("gifBtn").addEventListener("click", () => {
    let randomGif;
    do {
        randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    } while (randomGif === document.getElementById("gifImg").src)

    document.getElementById("gifImg").src = randomGif;
    createEmoji("🧇");
    document.querySelector(".gif-container").classList.add("animate__animated", "animate__rubberBand");
    setTimeout(() => {
        document.querySelector(".gif-container").classList.remove("animate__animated", "animate__rubberBand");
    }, 1000);
});


document.getElementById("factBtn").addEventListener("click", () => {
    const random = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("weirdFact").textContent = random;
    createConfetti();
    document.getElementById("weirdFact").classList.add("animate__animated", "animate__shakeX");
    setTimeout(() => {
        document.getElementById("weirdFact").classList.remove("animate__animated", "animate__shakeX");
    }, 1000);
});


function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = Math.random() * 10 + 5 + "px";
        confetti.style.height = Math.random() * 10 + 5 + "px";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}


function createEmoji(emoji) {
    for (let i = 0; i < 10; i++) {
        const emojiElement = document.createElement("div");
        emojiElement.className = "waffle-emoji";
        emojiElement.textContent = emoji;
        emojiElement.style.left = Math.random() * 100 + "vw";
        emojiElement.style.bottom = "0";
        emojiElement.style.fontSize = Math.random() * 20 + 20 + "px";
        emojiElement.style.animationDuration = Math.random() * 2 + 1 + "s";
        document.body.appendChild(emojiElement);

        setTimeout(() => {
            emojiElement.remove();
        }, 3000);
    }
}


function getRandomColor() {
    const colors = ["#f1c40f", "#e67e22", "#e74c3c", "#2ecc71", "#3498db", "#9b59b6"];
    return colors[Math.floor(Math.random() * colors.length)];
}


document.querySelectorAll("section").forEach((section, index) => {
    section.style.animationDelay = `${index * 0.3 + 0.5}s`;
});