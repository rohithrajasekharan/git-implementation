console.info('> TS-GIT - Version: 0.0.0.1')
console.info('> Ctrl + C to close')
import * as readLine from 'readline'
import { syntaxValidator } from './syntax-validation'
import { Git } from './src/git'

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const git = new Git()

const readCommand = () => {
    rl.question("git by rohith >>", (command: string) => {
        syntaxValidator(command, git);
        readCommand();
    })
}

readCommand();

rl.on('close', ()=> {
    console.log("\nExiting...");
    process.exit(0);
})