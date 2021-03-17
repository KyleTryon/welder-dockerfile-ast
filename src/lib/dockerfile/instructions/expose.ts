import { Instruction } from "../instruction"

export default class EXPOSE extends Instruction {
  name = "EXPOSE"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(7, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    return true
  }
}