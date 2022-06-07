const sentence = "hello there from lighthouse labs";

const newLineSentence = sentence + '\n';
let delay = 50;

for (const char of newLineSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}


