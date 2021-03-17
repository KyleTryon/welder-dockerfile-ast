import { Instruction } from "../instruction"

export default class SHELL extends Instruction {
  name = "SHELL"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(6, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    return true
  }
}