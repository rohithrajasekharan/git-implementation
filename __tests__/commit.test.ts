import { Commit } from "../src/commit"
import sha1 from 'sha1'

test('should create a commit with correct hash and message', ()=> {
    const commit = new Commit("message");
    expect(commit.message).toEqual("message")
    expect(commit.id).toEqual(sha1(commit.message))
})