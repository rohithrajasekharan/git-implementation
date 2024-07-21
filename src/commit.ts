import {CommitI} from "./interfaces/commit-interface"
import sha1 from 'sha1'

export class Commit implements CommitI {
    readonly id: string
    parent: CommitI | null
    message: string
    getCommitLog(): string[] {
        let commitAux: CommitI | null = this; //set as head
        const history: string[] = []
        //loop through child to get a history
        while(commitAux){
            history.push(commitAux.id);
            commitAux = commitAux.parent;
        }
        return history; 
    }
        
    constructor(message:string, parent: CommitI | null) {
        this.message = message;
        this.id = sha1(message);
        this.parent = parent;
    }
}
