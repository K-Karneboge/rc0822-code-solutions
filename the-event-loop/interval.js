var count = 3;
function tick(t) { var tock = setInterval(() => { if (t > 0) { console.log(t); t--; } else { clearInterval(tock); console.log('Blast off!'); } }, 1000); }
tick(count);
