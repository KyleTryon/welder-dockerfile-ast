import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class RUN extends Instruction {
  name = InstructionType.RUN
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