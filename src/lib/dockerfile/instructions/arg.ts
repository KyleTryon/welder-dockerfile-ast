import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class ARG extends Instruction {
  name = InstructionType.ARG
  value: string
  constructor(inputValue: string) {
    super(inputValue)
    this.value = inputValue.slice(4, inputValue.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate(): boolean{
    return true
  }
}