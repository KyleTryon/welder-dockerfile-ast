import {InstructionSet} from "../src/lib/dockerfile/instructionHandler"

import * as path from 'path'
import * as fs from 'fs'

describe("Validate all instructions are properly loaded", () => {
  const instructionSet = new InstructionSet()
  const instructionsPath = "../src/lib/dockerfile/instructions"
  const instructionFiles = fs.readdirSync(path.join(__dirname, instructionsPath))
  const instructionFilesNamesArray: string[] = []
  const instructionSetNamesArray: string[] = []
  instructionFiles.forEach(file => {
    instructionFilesNamesArray.push(file.slice(0, -3).toUpperCase())
  })
  instructionSet.forEach((key) => {
    instructionSetNamesArray.push(key.name)
  })
  it("testing", () => {
    expect(instructionFilesNamesArray).toEqual(instructionSetNamesArray)
  })
})