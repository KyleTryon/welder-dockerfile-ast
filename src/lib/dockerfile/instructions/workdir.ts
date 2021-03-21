import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class WORKDIR extends Instruction {
  name = InstructionType.WORKDIR
  value: string
  constructor(inputValue: string) {
    super(inputValue)
    this.value = inputValue.slice(8, inputValue.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate(): boolean{
    return true
  }
}