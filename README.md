# Instruction
## Disclaimer
This app just uses electron and binjgb. Read the binjgbREADME.md for more info.

## Basics
Put your GB rom into "rom" folder and rename it to "game.gb"
Edit "menu.html" HTML file if you want to display a custom menu before starting up the game.

## Test & Build
- NPM needs to be installed
- On the first time: Open terminal type and run "npm install". Wait until it's finished.

- To test your open terminal and type: "npm run electron"
- To create an executable your app open terminal and type "electron-packager "./" "BubbleWrap" --platform=win32 --arch="x64"". The file will be created inside the BubbleWrap folder.