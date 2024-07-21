import { Git } from "../src/git"

test("should return repo name properly", ()=> {
    const repo = new Git("new-repo");
    expect(repo.name).toEqual("new-repo")
})