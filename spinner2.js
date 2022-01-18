let delay = 300;
const cursors = ['/   ', '-   ', '\\   ', '|   '];
process.stdout.write(cursors[0]);
for (let i = 1; i <= 2; i ++) {
  for (let cursor of cursors) {
    setTimeout(() => {
      process.stdout.write("\r" + cursor);
    }, delay);
    delay += 200;
  }
}
setTimeout(() => {
  console.log();
}, delay);
