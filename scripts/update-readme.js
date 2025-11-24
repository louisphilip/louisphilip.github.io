const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', 'README.md');

const gifs = [
    "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif", // Coding cat
    "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif", // Typing fast
    "https://media.giphy.com/media/QHE5gWI0QjqF2/giphy.gif", // Hacking
    "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif", // Matrix code
    "https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif", // Computer kid
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", // Developer life
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // Cat typing
    "https://media.giphy.com/media/hrRJ41JB2zlg7vJFPx/giphy.gif", // Code compiling
];

try {
    let readmeContent = fs.readFileSync(readmePath, 'utf8');

    // Pick a random GIF
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    // Regex to find the GIF image tag and replace the src
    // Looks for: <img ... src="...giphy.gif" ... id="daily-gif">
    // We add an id="daily-gif" to the img tag in the README to make it easy to find
    const gifRegex = /<img([^>]+)src="[^"]+"([^>]+)id="daily-gif"([^>]*)>/;

    if (gifRegex.test(readmeContent)) {
        const newContent = readmeContent.replace(
            gifRegex,
            `<img$1src="${randomGif}"$2id="daily-gif"$3>`
        );

        fs.writeFileSync(readmePath, newContent);
        console.log(`Successfully updated README with GIF: ${randomGif}`);
    } else {
        console.error('Could not find the daily-gif image tag in README.md');
        process.exit(1);
    }

} catch (error) {
    console.error('Error updating README:', error);
    process.exit(1);
}
