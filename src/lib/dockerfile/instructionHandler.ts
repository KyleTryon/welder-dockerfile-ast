import {InstructionConstructor} from "./instruction"

import * as path from 'path'
import * as fs from 'fs'

export class InstructionSet extends Map<string, InstructionConstructor>{
  constructor() {
    super()
    const instructionsPath = "./instructions"
    const instructionFiles = fs.readdirSync(path.join(__dirname, instructionsPath))
    instructionFiles.forEach(file => {
      const instructionFile = path.join(__dirname, instructionsPath, file)
      const instructionClass = require(instructionFile).default as InstructionConstructor
      this.set(instructionClass.name, instructionClass)
    })
  }
}