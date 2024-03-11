![BubbleWrap](BubbleWrap_logo.png)
# About
## BubbleWrap
BubbleWrap is a collection of different tools to allow you wrap your GB rom into an executable file (e.g. ".exe"). It is made possible by mooonbit and timbojay.
Why is it called BubbleWrap? Because it was originally made to bring BubbleFrog to steam. BubbleFrog is timbojay's original GB Game (https://timbojay.itch.io/bubblefrog).

See below to learn about the different tools used in this package.

## Redistribute?
BubbleWrap is free to use and distributing your game is permitted.

## Why use BubbleWrap instead of building with electron directly?
Because we found a way to play the sound directly on opening the exe (without clicking the window).
This was made possible by the index.js file, which already starts the electron browser with a flag that allows playing sounds without clicking. We also edited binji's emulator script to start the music directly.

## You need help?
If you need a feature or you have a bug you can contact mooonbit via instagram mooonbit.studio or write an email: (same as the instagram but add @gmail.com)

# Instruction
## Basics
Put your GB rom into "rom" folder and rename it to "game.gb"
### With title-menu in html
Edit "menu.html" HTML file to your wishes if you want to display a custom menu before starting up the game.
### Without title-menu
Edit the index.js file in the root folder. In line 18 replace "menu.html" with "index.html".
'mainWindow.loadFile("index.html");'.

## Test & Build
- NPM needs to be installed (https://nodejs.org/en/download)
- On the first time: Open terminal in the BubbleWrap folder, type and run "npm install". Wait until it's finished.

- To test your app, open the terminal in root folder, type and run: "npm run electron"
- To create an executable of your game for Windows, do as follows: Open terminal, type and run in root folder: "npx electron-packager "./" "BubbleWrap" --platform=win32 --arch="x64"". This creates a folder with the ".exe" file.

# How does BubbleWrap work?
## binjgb files generated with GB Studio
Fork of binji's Game Boy emulator built as a WebAssembly module.

It includes changes from [Daid's fork](https://github.com/daid/binjgb) and others to better support GB Studio.

## electron
Electron packages the html page.

## electron-packager
Electron-packager is used to build an executable.
