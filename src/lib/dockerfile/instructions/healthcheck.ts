import { Instruction } from "../instruction"

export default class HEALTHCHECK extends Instruction {
  name = "HEALTHCHECK"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(12, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    return true
  }
}