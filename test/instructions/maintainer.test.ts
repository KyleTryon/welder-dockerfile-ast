import MAINTAINER from "../../src/lib/dockerfile/instructions/maintainer"

describe("Validate FROM instruction", () => {
  const MAINTAINERInput = 'MAINTAINER Company Inc. <email@address.com>'
  const InstructionElement = new MAINTAINER(MAINTAINERInput)
  it('Should have the name "MAINTAINER"', () => {
    expect(InstructionElement.name).toEqual("MAINTAINER")
  })
  it('Should have the value of "Company Inc. <email@address.com>"', () => {
    expect(InstructionElement.value).toEqual("Company Inc. <email@address.com>")
  })
})