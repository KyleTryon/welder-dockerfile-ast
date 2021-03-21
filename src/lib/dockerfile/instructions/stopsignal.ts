import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class STOPSIGNAL extends Instruction {
  name = InstructionType.STOPSIGNAL
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