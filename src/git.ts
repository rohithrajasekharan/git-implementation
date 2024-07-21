import {GitI} from "./interfaces/git-interface"

export class Git implements GitI {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}