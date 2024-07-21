import { Add } from "./add";
import { Branch } from "./branch";
import { BranchI } from "./interfaces/branch-interface";
import {GitI} from "./interfaces/git-interface"

export class Git implements GitI {
    name: string
    branch: BranchI;
    private branches: BranchI[] | null
    constructor(name?: string) {
        this.branches = [];
        this.name = name || 'default-name';

        const branch = new Branch('main', null);
        this.branch = branch;
        this.add(branch)
    }

    private add(branch: BranchI) {
        this.branches?.push(branch)
    }

    checkout(name?: string | undefined): BranchI {
        if (!name){
            console.info(`Current branch: ${this.branch.name}`)
            return this.branch;
        }
        const branchIdx = this.branches?.findIndex((branch) => branch.name === name);

        if(branchIdx !== undefined && branchIdx !== -1 && this.branches?.length){
            this.branch = this.branches[branchIdx];
            console.info(`Switched to branch: ${this.branch.name}`);
            return this.branch;
        }

        this.branch = new Branch(name, this.branch?.commit);
        this.add(this.branch)
        console.info(`Created and switched to: ${name}`)
        return this.branch
    }

    stageFile(path: string): boolean {
        return new Add().stageFile(path);
    }
}