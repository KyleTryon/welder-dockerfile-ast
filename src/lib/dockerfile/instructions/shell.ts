import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class SHELL extends Instruction {
  name = InstructionType.SHELL
  value: string
  constructor(inputValue: string) {
    super(inputValue)
    this.value = inputValue.slice(6, inputValue.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate(): boolean{
    return true
  }
}