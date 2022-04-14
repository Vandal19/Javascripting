// console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.
const sentence = "hello there from lighthouse labs";
let x = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, x += 50);
}
