const fs = require('fs');

for (let i = 5; i <= 10; i++) {
  const file = `sync-txt${i}.txt`;
  fs.writeFile(file, 'Hello Node.js', (err, out) => {
    console.log(out);
  });
}