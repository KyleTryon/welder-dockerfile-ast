import { Instruction } from "../instruction"

export default class ENTRYPOINT extends Instruction {
  name = "ENTRYPOINT"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(11, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    return true
  }
}