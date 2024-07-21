export interface CommitI {
    id: string
    message: string
    parent: CommitI | null
    getCommitLog: () => string[];
}