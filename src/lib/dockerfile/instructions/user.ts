import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class USER extends Instruction {
  name = InstructionType.USER
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