# Wizard cardgame

This repo will be a WIP implementation of the card game [Wizard](https://en.wikipedia.org/wiki/Wizard_(card_game)). The plan is to write the game as a server client structure with a NodeJS backend server.

## Usage

### Build
```bash
npm run build
```
This command purges the `build` directory and compiles the sourcecode in the `src` directory.

### Run
```bash
npm run start
```
This command runs the above build command and then executes the resulting JavaScript code with node.

### Run (dev)
```bash
npm run start:dev
```
Starts a nodemon instance which reexecutes the project on changes in the `src` directory.

### Lint
```bash
npm run lint
```
Runs eslint on the `src` directory.

### Lint & fix
```bash
npm run lint-and-fix
```
Runs eslint on the `src` directory and fixes the stuff eslint can do.
