import {InstructionSet, Instruction, DockerFileObject, InstructionConstructor} from "./lib/dockerfile"
const instructionSet = new InstructionSet()

/**
 * Parse a Dockerfile source to an Object (DockerFileObject)
 * @param dockerfile - Dockerfile source
 * @returns - An AST Dockerfile representation
 */
export function parse(dockerfile: string): DockerFileObject {
  const instructions: Instruction[] = []
  const lines = dockerfile.split(/\r?\n/)
  /**
   * An array of matched groups of potential from the dockerfile
   */
  const nodes: string[] = []
  let nodePartial = ""

  lines.forEach((line) => {
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

    const node = nodePartial + ' ' + line
    nodePartial = ""
    nodes.push(node.trim())
  })
  /**
   * For each node, parse into 
   */
  nodes.forEach(node => {
    const splitOn = node.indexOf(" ")
    const instructionTokenString = node.substr(0, splitOn)
    const valueTokenString = node.substr(splitOn + 1)
    if (instructionSet.has(instructionTokenString)) {
      const instructionInstantiation = instructionSet.get(instructionTokenString) as InstructionConstructor
      instructions.push(new instructionInstantiation(valueTokenString))
    } else {
      throw new Error("Instruction for node not found. Invalid")
    }
  })
  return new DockerFileObject(instructions)
}
