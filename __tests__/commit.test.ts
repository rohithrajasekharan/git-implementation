import { Commit } from "../src/commit"
import sha1 from 'sha1'
import * as fs from 'fs'

test('should create a commit with correct hash and message', ()=> {
    const commit = new Commit("message",null);
    expect(commit.message).toEqual("message")
    expect(commit.id).toEqual(sha1(fs.readFileSync(`${__dirname}/../store.txt`)))
})