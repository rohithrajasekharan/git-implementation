import { BranchI } from "./interfaces/branch-interface";
import { CommitI } from './interfaces/commit-interface';

export class Branch implements BranchI {
    name: string; 
    commit: CommitI | null;
    constructor(name: string, commit: CommitI | null) {
        this.name = name;
        this.commit = commit;
    }
}
