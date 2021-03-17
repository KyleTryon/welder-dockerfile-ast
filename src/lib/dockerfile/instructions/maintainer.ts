import { Instruction } from "../instruction"

export default class MAINTAINER extends Instruction {
  name = "MAINTAINER"
  value: string
  constructor(node: string) {
    super(node)
    this.value = this._inputNode.slice(11, this._inputNode.length)
  }
  /** Ensure a valid image is selected for the base image*/
  validate() : boolean{
    //Deprecated. Use Label instead
    return true
  }
}