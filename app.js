const WORDS = [
    "abadi",
    "abadi",
    "abadi",
    "adash",
    "adash",
    "adiba",
    "adiba",
    "ajdar",
    "ajdar",
    "ajrim",
    "ajrim",
    "ajrat",
    "akbar",
    "akbar",
    "akram",
    "akram",
    "akson",
    "akson",
    "albat",
    "albat",
    "alham",
    "alham",
    "alish",
    "alish",
    "allom",
    "allom",
    "aloqa",
    "aloqa",
    "amald",
    "amald",
    "amalr",
    "amalr",
    "amali",
    "amali",
    "anhor",
    "anhor",
    "ancha",
    "ancha",
    "angor",
    "angor",
    "anorx",
    "anorx",
    "aprel",
    "aprel",
    "arava",
    "arava",
    "ariza",
    "ariza",
    "arkan",
    "arkan",
    "arman",
    "arman",
    "armut",
    "armut",
    "asbob",
    "asbob",
    "askar",
    "askar",
    "asliy",
    "asliy",
    "asrab",
    "asrab",
    "atlas",
    "atlas",
    "avval",
    "avval",
    "ayrim",
    "ayrim",
    "ayron",
    "ayron",
    "azald",
    "azald",
    "azimr",
    "azimr",
    "aziza",
    "aziza",
    "badan",
    "badan",
    "badal",
    "badal",
    "bahor",
    "bahor",
    "baxti",
    "baxti",
    "baliq",
    "baliq",
    "barak",
    "barak",
    "baror",
    "baror",
    "barva",
    "barva",
    "batar",
    "batar",
    "baxil",
    "baxil",
    "bayon",
    "bayon",
    "bazir",
    "bazir",
    "bekor",
    "bekor",
    "belgi",
    "belgi",
    "belgi",
    "belgi",
    "bemor",
    "bemor",
    "beshik",
    "beshik",
    "bexos",
    "bexos",
    "bilan",
    "bilan",
    "bilim",
    "bilim",
    "binoi",
    "binoi",
    "biroq",
    "biroq",
    "bitta",
    "bitta",
    "bodom",
    "bodom",
    "bolam",
    "bolam",
    "boron",
    "boron",
    "boshi",
    "boshi",
    "bosim",
    "bosim",
    "bosti",
    "bosti",
    "bozor",
    "bozor",
    "burch",
    "burch",
    "buron",
    "buron",
    "buyum",
    "buyum",
    "daryo",
    "daryo",
    "darak",
    "darak",
    "dasta",
    "dasta",
    "dekor",
    "dekor",
    "devor",
    "devor",
    "doira",
    "doira",
    "dokor",
    "dokor",
    "donga",
    "donga",
    "dunyo",
    "dunyo",
    "eshik",
    "eshik",
    "etgan",
    "etgan",
    "etnik",
    "etnik",
    "fasli",
    "fasli",
    "fayiz",
    "fayiz",
    "fikri",
    "fikri",
    "fokus",
    "fokus",
    "gacha",
    "gacha",
    "gapir",
    "gapir",
    "gijda",
    "gijda",
    "gilos",
    "gilos",
    "gulim",
    "gulim",
    "gulor",
    "gulor",
    "halol",
    "halol",
    "hamda",
    "hamda",
    "hamon",
    "hamon",
    "hayot",
    "hayot",
    "hazil",
    "hazil",
    "havas",
    "havas",
    "hisob",
    "hisob",
    "hunar",
    "hunar",
    "idish",
    "idish",
    "ichki",
    "ichki",
    "ijara",
    "ijara",
    "ilgar",
    "ilgar",
    "imkon",
    "imkon",
    "inson",
    "inson",
    "ishon",
    "ishon",
    "ishor",
    "ishor",
    "istak",
    "istak",
    "izhor",
    "izhor",
    "javob",
    "javob",
    "jahon",
    "jahon",
    "jamol",
    "jamol",
    "jaray",
    "jaray",
    "jasad",
    "jasad",
    "javon",
    "javon",
    "jigar",
    "jigar",
    "jonli",
    "jonli",
    "jonon",
    "jonon",
    "joriy",
    "joriy",
    "kabob",
    "kabob",
    "kamar",
    "kamar",
    "kamol",
    "kamol",
    "karam",
    "karam",
    "katta",
    "katta",
    "kebap",
    "kebap",
    "kelar",
    "kelar",
    "kelib",
    "kelib",
    "kecha",
    "kecha",
    "kesim",
    "kesim",
    "kichik",
    "kichik",
    "kitob",
    "kitob",
    "kocha",
    "kocha",
    "koila",
    "koila",
    "komil",
    "komil",
    "konin",
    "konin",
    "korin",
    "korin",
    "kozim",
    "kozim",
    "kulgi",
    "kulgi",
    "kulol",
    "kulol",
    "kulon",
    "kulon",
    "kurak",
    "kurak",
    "kuron",
    "kuron",
    "lagan",
    "lagan",
    "lazim",
    "lazim",
    "libos",
    "libos",
    "lozim",
    "lozim",
    "mahor",
    "mahor",
    "makon",
    "makon",
    "malak",
    "malak",
    "manba",
    "manba",
    "manti",
    "manti",
    "marra",
    "marra",
    "mehnat",
    "mehnat",
    "mehri",
    "mehri",
    "menga",
    "menga",
    "midor",
    "midor",
    "milod",
    "milod",
    "minar",
    "minar",
    "misol",
    "misol",
    "modda",
    "modda",
    "muhim",
    "muhim",
    "muzey",
    "muzey",
    "nasib",
    "nasib",
    "nazir",
    "nazir",
    "navro",
    "navro",
    "negaq",
    "negaq",
    "nevar",
    "nevar",
    "nonus",
    "nonus",
    "noyob",
    "noyob",
    "odamz",
    "odamz",
    "oqish",
    "oqish",
    "orali",
    "orali",
    "osmon",
    "osmon",
    "otash",
    "otash",
    "otliq",
    "otliq",
    "ozoda",
    "ozoda",
    "parda",
    "parda",
    "pilla",
    "pilla",
    "piyoz",
    "piyoz",
    "qadam",
    "qadam",
    "qalam",
    "qalam",
    "qator",
    "qator",
    "qayin",
    "qayin",
    "qazil",
    "qazil",
    "qidir",
    "qidir",
    "qilich",
    "qilich",
    "qissa",
    "qissa",
    "quyon",
    "quyon",
    "quyru",
    "quyru",
    "quril",
    "quril",
    "rabot",
    "rabot",
    "rangi",
    "rangi",
    "ravon",
    "ravon",
    "risht",
    "risht",
    "rohat",
    "rohat",
    "saboq",
    "saboq",
    "samar",
    "samar",
    "sandi",
    "sandi",
    "savdo",
    "savdo",
    "sokin",
    "sokin",
    "soxta",
    "soxta",
    "sozim",
    "sozim",
    "tabib",
    "tabib",
    "tanho",
    "tanho",
    "taraf",
    "taraf",
    "tashq",
    "tashq",
    "tayin",
    "tayin",
    "terak",
    "terak",
    "tilak",
    "tilak",
    "tirik",
    "tirik",
    "toifa",
    "toifa",
    "tomir",
    "tomir",
    "tuman",
    "tuman",
    "turli",
    "turli",
    "uyali",
    "uyali",
    "uzoqr",
    "uzoqr",
    "vazir",
    "vazir",
    "yangi",
    "yangi",
    "yapon",
    "yapon",
    "yashil",
    "yashil",
    "yigit",
    "yigit",
    "yirik",
    "yirik",
    "yodda",
    "yodda",
    "yomg'",
    "yomg'",
    "yosti",
    "yosti",
    "yuldu",
    "yuldu",
    "yuzli",
    "yuzli",
    "zamon",
    "zamon",
    "zarur",
    "zarur",
    "zarra",
    "zarra",
    "ziyor",
    "ziyor"
];

const MAX_ROWS = 6;
const WORD_LENGTH = 5;

let targetWord = "";
let currentRow = 0;
let gameOver = false;
let wins = Number(localStorage.getItem("uz_wordle_wins") || 0);
let losses = Number(localStorage.getItem("uz_wordle_losses") || 0);

const boardEl = document.getElementById("board");
const keyboardEl = document.getElementById("keyboard");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const newGameBtn = document.getElementById("newGameBtn");
const restartBtn = document.getElementById("restartBtn");
const hintBtn = document.getElementById("hintBtn");
const messageBox = document.getElementById("messageBox");
const attemptCount = document.getElementById("attemptCount");
const winCount = document.getElementById("winCount");
const loseCount = document.getElementById("loseCount");

const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
];

function normalizeUzbek(text) {
    return String(text)
        .toLowerCase()
        .trim()
        .replace(/o‘|o'/g, "o")
        .replace(/g‘|g'/g, "g")
        .replace(/sh/g, "s")
        .replace(/ch/g, "c")
        .replace(/ng/g, "n")
        .replace(/[^a-z]/g, "");
}

const VALID_WORDS = WORDS
    .map(word => normalizeUzbek(word))
    .filter(word => word.length === WORD_LENGTH);

function chooseWord() {
    return VALID_WORDS[Math.floor(Math.random() * VALID_WORDS.length)];
}

function createBoard() {
    boardEl.innerHTML = "";

    for (let row = 0; row < MAX_ROWS; row++) {
        const rowEl = document.createElement("div");
        rowEl.className = "row-grid";

        for (let col = 0; col < WORD_LENGTH; col++) {
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.id = `tile-${row}-${col}`;
            rowEl.appendChild(tile);
        }

        boardEl.appendChild(rowEl);
    }
}

function createKeyboard() {
    keyboardEl.innerHTML = "";

    keyboardRows.forEach(rowKeys => {
        const rowEl = document.createElement("div");
        rowEl.className = "keyboard-row";

        rowKeys.forEach(key => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "key-btn" + ((key === "ENTER" || key === "⌫") ? " wide" : "");
            btn.textContent = key;
            btn.dataset.key = key;
            btn.addEventListener("click", () => handleVirtualKey(key));
            rowEl.appendChild(btn);
        });

        keyboardEl.appendChild(rowEl);
    });
}

function setMessage(text, type = "info") {
    messageBox.className = `alert alert-${type} mb-3`;
    messageBox.textContent = text;
}

function updateStats() {
    attemptCount.textContent = `${Math.min(currentRow + 1, 6)}/6`;
    winCount.textContent = wins;
    loseCount.textContent = losses;
}

function clearPreviewRow() {
    for (let col = 0; col < WORD_LENGTH; col++) {
        const tile = document.getElementById(`tile-${currentRow}-${col}`);
        if (!tile) continue;

        if (
            !tile.classList.contains("correct") &&
            !tile.classList.contains("present") &&
            !tile.classList.contains("absent")
        ) {
            tile.textContent = "";
            tile.classList.remove("filled");
        }
    }
}

function updateRowPreview() {
    clearPreviewRow();

    const value = normalizeUzbek(guessInput.value)
        .slice(0, WORD_LENGTH)
        .toUpperCase();

    for (let col = 0; col < WORD_LENGTH; col++) {
        const tile = document.getElementById(`tile-${currentRow}-${col}`);
        if (!tile) continue;

        if (
            tile.classList.contains("correct") ||
            tile.classList.contains("present") ||
            tile.classList.contains("absent")
        ) {
            continue;
        }

        tile.textContent = value[col] || "";
        tile.classList.toggle("filled", Boolean(value[col]));
    }
}

function getStatuses(guess, answer) {
    const result = Array(WORD_LENGTH).fill("absent");
    const answerChars = answer.split("");
    const guessChars = guess.split("");

    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guessChars[i] === answerChars[i]) {
            result[i] = "correct";
            answerChars[i] = null;
            guessChars[i] = null;
        }
    }

    for (let i = 0; i < WORD_LENGTH; i++) {
        if (!guessChars[i]) continue;

        const foundIndex = answerChars.indexOf(guessChars[i]);
        if (foundIndex !== -1) {
            result[i] = "present";
            answerChars[foundIndex] = null;
        }
    }

    return result;
}

function colorKeyboard(letter, status) {
    const priority = { correct: 3, present: 2, absent: 1 };
    const buttons = [...document.querySelectorAll(".key-btn")];
    const btn = buttons.find(button => button.dataset.key === letter.toUpperCase());

    if (!btn) return;

    const currentStatus = btn.dataset.status;
    if (!currentStatus || priority[status] > priority[currentStatus]) {
        btn.dataset.status = status;
        btn.classList.remove("correct", "present", "absent");
        btn.classList.add(status);
    }
}

function submitGuess() {
    if (gameOver) return;

    const guess = normalizeUzbek(guessInput.value);

    if (guess.length !== WORD_LENGTH) {
        setMessage("Faqat 5 ta harfdan iborat so'zlar kiriting.", "warning");
        return;
    }

    if (!VALID_WORDS.includes(guess)) {
        setMessage("Bu so'z lug'atda topilmadi.", "danger");
        return;
    }

    const statuses = getStatuses(guess, targetWord);

    for (let i = 0; i < WORD_LENGTH; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        tile.textContent = guess[i].toUpperCase();
        tile.classList.remove("filled");
        tile.classList.add(statuses[i]);
        colorKeyboard(guess[i], statuses[i]);
    }

    if (guess === targetWord) {
        gameOver = true;
        wins += 1;
        localStorage.setItem("uz_wordle_wins", wins);
        setMessage(`Tabriklaymiz! To'g'ri javob: ${targetWord.toUpperCase()}`, "success");
        updateStats();
        return;
    }

    currentRow += 1;
    guessInput.value = "";
    updateStats();

    if (currentRow >= MAX_ROWS) {
        gameOver = true;
        losses += 1;
        localStorage.setItem("uz_wordle_losses", losses);
        setMessage(`Urinishlar tugadi. To'g'ri javob: ${targetWord.toUpperCase()}`, "secondary");
        return;
    }

    setMessage("Davom eting, siz yaqinlashyapsiz.", "info");
    updateRowPreview();
    guessInput.focus();
}

function handleVirtualKey(key) {
    if (gameOver) return;

    if (key === "ENTER") {
        submitGuess();
        return;
    }

    if (key === "⌫") {
        guessInput.value = guessInput.value.slice(0, -1);
        updateRowPreview();
        return;
    }

    if (normalizeUzbek(guessInput.value).length < WORD_LENGTH) {
        guessInput.value += key.toLowerCase();
        updateRowPreview();
    }
}

function showHint() {
    if (gameOver) return;
    setMessage(`Maslahat: so'z "${targetWord[0].toUpperCase()}" harfi bilan boshlanadi.`, "primary");
}

function resetOnlyGame() {
    targetWord = chooseWord();
    currentRow = 0;
    gameOver = false;
    guessInput.value = "";

    createBoard();
    createKeyboard();
    updateStats();
    updateRowPreview();
    setMessage("O'yin qayta boshlandi. Faqat 5 ta harfdan iborat so'zlar kiriting.", "info");
    guessInput.focus();
}

function startGame() {
    resetOnlyGame();
}

guessInput.addEventListener("input", () => {
    guessInput.value = normalizeUzbek(guessInput.value).slice(0, WORD_LENGTH);
    updateRowPreview();
});

guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitGuess();
    }
});

submitBtn.addEventListener("click", submitGuess);
newGameBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", resetOnlyGame);
hintBtn.addEventListener("click", showHint);

document.addEventListener("keydown", (e) => {
    if (document.activeElement === guessInput) return;

    if (/^[a-zA-Z]$/.test(e.key)) {
        handleVirtualKey(e.key.toUpperCase());
    } else if (e.key === "Backspace") {
        handleVirtualKey("⌫");
    } else if (e.key === "Enter") {
        handleVirtualKey("ENTER");
    }
});

startGame();