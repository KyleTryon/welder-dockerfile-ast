import { Instruction } from "../instruction"

export default class WORKDIR extends Instruction {
  name = "WORKDIR"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(8, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    return true
  }
}