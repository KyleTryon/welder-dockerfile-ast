import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class HEALTHCHECK extends Instruction {
  name = InstructionType.HEALTHCHECK
  value: string
  constructor(inputValue: string) {
    super(inputValue)
    this.value = inputValue.slice(12, inputValue.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate(): boolean{
    return true
  }
}