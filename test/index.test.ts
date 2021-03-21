import * as welderAST from "../src"
import * as fs from 'fs'
import { Instruction } from "../src/lib/dockerfile/instruction"

describe("Parse config", () => {
  it("should return a FROM instruction as the first instruction", () => {
    const dockerfile = fs.readFileSync("./test/sample_dockerfiles/gitlab.dockerfile").toString()
    const gitlab = welderAST.parse(dockerfile)
    expect(gitlab.instructions[0].name).toEqual("FROM")
  })
})

// Current design does not preserve comments or linebreaks properly. Will begin to work toward this as progress is made
describe.skip("Stringify DockerFileObject", () => {
  it("Should be able to parse into an object, and re-stringify to produce the same result", () => {
    const dockerfile = fs.readFileSync("./test/sample_dockerfiles/gitlab.dockerfile").toString()
    const gitlabObject = welderAST.parse(dockerfile)
    const stringified = gitlabObject.stringify()
    console.log("Dockerfile: /n", stringified)
    expect(stringified).toEqual(dockerfile)
  })
})