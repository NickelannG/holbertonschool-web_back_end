console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  // Remove any trailing newline characters from the input
  const name = input.trim();
  
  // Output the user name
  process.stdout.write(`Your name is: ${name}\n`);
  
  // Exit the program after outputting the name
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
