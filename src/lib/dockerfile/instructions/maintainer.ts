import { Instruction } from "../instruction"
import { InstructionType } from "../instructionHandler"

export default class MAINTAINER extends Instruction {
  name = InstructionType.MAINTAINER
  value: string
  constructor(inputValue: string) {
    super(inputValue)
    this.value = inputValue.slice(11, inputValue.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate(): boolean{
    //Deprecated. Use Label instead
    return true
  }
}