import { Add } from "../src/add"

test("", ()=>{
    const add = new Add(`${__dirname}/db-test.txt`);
    const result = add.stageFile(`${__dirname}/test-file.txt`);
    expect(result).toBeTruthy();
})