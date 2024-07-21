import { Commit } from "../src/commit";
import { Git } from "../src/git"

test("should return repo name properly", ()=> {
    const repo = new Git("new-repo");
    expect(repo.name).toEqual("new-repo")
})

test("should be able to checkout default branch", ()=>{
    const git = new Git();
    const currBranch = git.checkout();
    expect(currBranch.name).toEqual('main');
})

test("should be able to checkout to new branch", ()=>{
    const git = new Git();
    const currBranch = git.checkout("master");
    expect(currBranch.name).toEqual('master');
    expect(git.checkout('testing').name).toEqual('testing');
})

test("should be able to keep commit history", ()=>{
    const git = new Git();
    let branch = git.branch;
    const commit = branch.commit;
    const commit1 = new Commit('commit1', commit);
    branch.commit = commit1;
    const commit2 = new Commit('commit2', commit1);
    branch.commit = commit2;
    git.checkout('another-master');
    branch = git.branch;
    const commit3 = new Commit('commit3', commit2);
    branch.commit = commit3;
    git.checkout('another-master');
    branch = git.branch;
    expect(branch.commit?.getCommitLog()).toEqual([
        commit3.id,
        commit2.id, 
        commit1.id
    ])
})