import FROM from "../../src/lib/dockerfile/instructions/from"

describe("Validate FROM instruction", () => {
  const FROMInput = 'FROM ubuntu:20.04'
  const InstructionElement = new FROM(FROMInput)
  it('Should have the name "FROM"', () => {
    expect(InstructionElement.name).toEqual("FROM")
  })
  it('Should have the value of "ubuntu:20.04"', () => {
    expect(InstructionElement.value).toEqual("ubuntu:20.04")
  })
})