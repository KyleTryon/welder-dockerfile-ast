import { Instruction } from "../instruction"

export default class USER extends Instruction {
  name = "USER"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(5, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    return true
  }
}