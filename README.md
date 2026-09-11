# Crimson Crypt Comedy (66)

Build a single-file playable web game (HTML/CSS/JS) titled "Curse of the Crimson Crypt"—a desktop horror game that ends in a comedic twist. No external assets; synthesize all sounds using the Web Audio API.




Gameplay Flow:




Intro & Flashlight Exploration: Pitch-black room where an HTML5 canvas flashlight beam tracks the mouse across spooky stone walls. Clicking a hidden golden chalice triggers the chase.

Corridor Chase: Intense screen-shake sequence. Use custom SVG silhouettes (no emojis) of a horned beast chasing a running player. The player must mash [SPACEBAR] to outrun the monster while a distance meter depletes.

Jumpscare: Reaching the end (or getting caught) triggers a violent 1-second jumpscare with screen strobing, a zooming demon maw, and a loud synthesized audio screech.

The Bureaucracy Twist: Instant hard cut to bright daylight and cheery synth elevator music. The demon is wearing reading glasses, scolding the player for running because they just dropped their wallet.

Interactive Ending: An itemized damage invoice with an interactive HTML5 signature pad where the player must scribble their signature using the mouse to exit.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3c4d0a25-4b32-432d-8aa9-f2f997c45871).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
