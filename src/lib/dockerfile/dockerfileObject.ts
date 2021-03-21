import { Instruction } from "./instruction"
import { InstructionType } from "./instructionHandler"

/**
 * An AST Tree representation of a Dockerfile
 */
export class DockerFileObject {
  /**
   * An ordered array of instructions present in the dockerfile.
   * @see {@link Instruction}
   */
  instructions: Instruction[] = []

  constructor(instructions?: Instruction[]) {
    if (instructions) {
      this.instructions = instructions
    }
  }

  /**
   * Generate a dockerfile
   * @returns A dockerfile string
   */
  stringify(): string {
    let dockerfile = ""
    this.instructions.forEach(instruction => {
      dockerfile += instruction.name + " " + instruction.value + "\n"
    })
    return dockerfile
  }

  /**
   * Insert an Instruction object into the dockerfile Instructions at any position.
   * A non-existent insertion order will result in an error.
   * @param instruction Insert an {@link Instruction} object
   * @param insertIndex Order in {@link instructions} array
   */
  addInstruction(instruction: Instruction, insertIndex: number): void {
    this.instructions.push(instruction)
  }

  /**
   * 
   * @param keyword Return an array of values for any valid instructions of this type present. Access valid instruction types via {@link InstructionType}
   * @returns An array containing one or more results of matched instructions. Will return undefined if no matches found.
   */
  getInstruction(keyword: InstructionType): Instruction[] | undefined {
    const matchedInstructions: Instruction[] = []
    this.instructions.forEach(instruction => {
      if (instruction.name === keyword) {
        matchedInstructions.push(instruction)
      }
    })
    return matchedInstructions
  }

}