import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class VOLUME extends Instruction {
  name = InstructionType.VOLUME
  value: string
  constructor(inputValue: string) {
    super(inputValue)
    this.value = inputValue.slice(7, inputValue.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate(): boolean{
    return true
  }
}