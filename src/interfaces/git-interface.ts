import { BranchI } from "./branch-interface"

export interface GitI {
    name: string
    branch: BranchI
    checkout: (name?: string) => BranchI;
    stageFile: (path: string) => boolean;
}