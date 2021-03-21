import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class FROM extends Instruction {
  name = InstructionType.FROM
  value: string
  constructor(inputValue: string) {
    super(inputValue)
    this.value = inputValue.slice(5, inputValue.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate(): boolean{
    return true
  }
}