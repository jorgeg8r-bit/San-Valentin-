(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Sofi Estas Segura?",
    "Muy segura??",
    "Muy Muy Muy Muy Muy segura?",
    "Soy Gracioso de repente",
    "Minimo Piensalo!",
    "Si Dices que no se muere bts...",
    "Chofiii piensalo bien...",
    "Te pago por favor...",
    "Okey, ya no insistire...",
    "Es broma, solo di que siii😩😭! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    
    // Solo aumentar significativamente el tamaño en el último mensaje
    if (messageIndex === messages.length - 1) {
        yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton).fontSize) * 2}px`;
    } else {
        // Aumento pequeño para los mensajes anteriores
        yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton).fontSize) * 1.1}px`;
    }
    
    messageIndex = (messageIndex + 1) % messages.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
