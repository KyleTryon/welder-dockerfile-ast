import { Instruction } from "../instruction"

export default class ONBUILD extends Instruction {
  name = "ONBUILD"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(9, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    return true
  }
}