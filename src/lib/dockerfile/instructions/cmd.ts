import { Instruction } from "../instruction"

export default class CMD extends Instruction {
  name = "cmd"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(4, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    return true
  }
}