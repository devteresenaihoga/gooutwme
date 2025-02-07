const messages = [
    "Are you sure?",
    "Really sure??",
    "Absolutely positive?",
    "Ary please...",
    "As if I'm letting this go",
    "Ok this isn't funny anymore",
    "I will kms",
    "say yes you dumbassss",
    "fine i'll stop asking",
    "jk, i'd never give up on you so GO OUT WITH MEEEE"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}