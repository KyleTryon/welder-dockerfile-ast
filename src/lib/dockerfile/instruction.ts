/**
 * Represents a Dockerfile Instruction (Abstract).
 */
export abstract class Instruction {
  abstract name: string
  abstract value: string
  protected _inputNode: string
  constructor(node: string) {
    this._inputNode = node
  }
  /**
   * Validate each individual instruction's value with unique rules to that instruction
   */
  abstract validate(): boolean // Integrate error messages later
}

export type InstructionConstructor = new (node: string) => Instruction