import { parse } from "../.."
import { Instruction } from "./instruction"
export class Config {
  instructions: Instruction[] = []
  dockerfile: string
  constructor(dockerfile: string) {
    this.dockerfile = dockerfile
  }

  parse() {
    const lines = this.dockerfile.split(/\r?\n/)
    const nodes: string[] = []
    let nodePartial = ""

    lines.forEach((line, lineNum) => {
      // Trim whitespace from the line
      line = line.trim()
      // Ignore comments and empty lines
      if (line === '' || line.startsWith('#')) {
        return
      }

       // If the line ends in \, then it's a partial line
      if (line.slice(-1) === '\\') {
        nodePartial += line.slice(0, -1) + ' '
        return
      }

      let node = nodePartial + ' ' + line
      nodePartial = ""
      nodes.push(node)
    })
    return nodes
  }

}