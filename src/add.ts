import { AddI } from "./interfaces/add-interface";
import * as fs from 'fs'

export class Add implements AddI {
    private dbPath: string;
    constructor(dbPath?: string){
        this.dbPath = dbPath || './store.txt'
    }

    stageFile(path: string): boolean {
        if(fs.existsSync(path)) {
            try {
                fs.writeFileSync(this.dbPath, path);
                return true;
            } catch (error) {
                console.error('File does not exist', error);
                return false;
            }
        }
        return false;
    }
}