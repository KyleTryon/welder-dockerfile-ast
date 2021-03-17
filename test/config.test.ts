import {Config} from "../src/lib/dockerfile/config"
import fs from 'fs'

describe("Parse config", () => {
  it("should return a FROM instruction as the first instruction", () => {
    const dockerfile = fs.readFileSync("./test/sample_dockerfiles/gitlab.dockerfile").toString()
    const gitlab = new Config(dockerfile).parse()
    expect(gitlab[0]).toContain("FROM")
  })
})