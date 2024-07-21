import { Branch } from "../src/branch"

test("should create branch properly",()=>{
    const branch = new Branch('master', null)
    expect(branch.name).toEqual('master')
})