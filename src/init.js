import gameState from "./gameState";
const TICK_RATE = 3000; // Tick every 3 seconds

async function init() {
  console.log("Starting Game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();

/* == Benefits of requestAnimationFrame == :
- The browser can optimize it, so animations will be smoother 
- Animations in inactive tabs will stop, allowing the CPU to chill
- More battery-friendly
*/
