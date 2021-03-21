import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class ONBUILD extends Instruction {
  name = InstructionType.ONBUILD
  value: string
  constructor(inputValue: string) {
    super(inputValue)
    this.value = inputValue.slice(9, inputValue.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate(): boolean{
    return true
  }
}