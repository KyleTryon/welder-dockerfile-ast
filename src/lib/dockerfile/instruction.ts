import {InstructionType} from "./instructionHandler"
/**
 * Represents a Dockerfile Instruction (Abstract).
 * @constructor
 * @param {string} inputValue - The input value string for the instruction. Value originates from parse()
 */
export abstract class Instruction {
  abstract name: InstructionType
  abstract value: string
  // abstract type: "array" | "string" | "object"
  private _inputValue: string
  constructor(inputValue: string) {
    this._inputValue = inputValue
  }
  /**
   * Validate each individual instruction's value with unique rules to that instruction
   */
  abstract validate(): boolean // Integrate error messages later
}

/**
 * 
 */
export type InstructionConstructor = new (inputValue: string) => Instruction