const TICK_RATE = 3000; // Tick every 3 seconds

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("Starting Game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
