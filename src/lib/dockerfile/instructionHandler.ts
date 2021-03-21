import {InstructionConstructor} from "./instruction"
import {
  ADD,
  ARG,
  CMD,
  COPY,
  ENTRYPOINT,
  ENV,
  EXPOSE,
  FROM,
  HEALTHCHECK,
  LABEL,
  MAINTAINER,
  ONBUILD,
  RUN,
  SHELL,
  STOPSIGNAL,
  USER,
  VOLUME,
  WORKDIR
} from "./instructions"

/**
 * Valid dockerfile intructions strings
 */
export enum InstructionType {
  ADD = "ADD",
  ARG = "ARG",
  CMD = "CMD",
  COPY = "COPY",
  ENTRYPOINT = "ENTRYPOINT",
  ENV = "ENV",
  EXPOSE = "EXPOSE",
  FROM = "FROM",
  HEALTHCHECK = "HEALTHCHECK",
  LABEL = "LABEL",
  MAINTAINER = "MAINTAINER",
  ONBUILD = "ONBUILD",
  RUN = "RUN",
  SHELL = "SHELL",
  STOPSIGNAL = "STOPSIGNAL",
  USER = "USER",
  VOLUME = "VOLUME",
  WORKDIR = "WORKDIR",
}

export class InstructionSet extends Map<string, InstructionConstructor>{
  constructor() {
    super()
    this.set(InstructionType.ADD, ADD)
    this.set(InstructionType.ARG, ARG)
    this.set(InstructionType.CMD, CMD)
    this.set(InstructionType.COPY, COPY)
    this.set(InstructionType.ENTRYPOINT, ENTRYPOINT)
    this.set(InstructionType.ENV, ENV)
    this.set(InstructionType.EXPOSE, EXPOSE)
    this.set(InstructionType.FROM, FROM)
    this.set(InstructionType.HEALTHCHECK, HEALTHCHECK)
    this.set(InstructionType.LABEL, LABEL)
    this.set(InstructionType.MAINTAINER, MAINTAINER)
    this.set(InstructionType.ONBUILD, ONBUILD)
    this.set(InstructionType.RUN, RUN)
    this.set(InstructionType.SHELL, SHELL)
    this.set(InstructionType.STOPSIGNAL, STOPSIGNAL)
    this.set(InstructionType.USER, USER)
    this.set(InstructionType.VOLUME, VOLUME)
    this.set(InstructionType.WORKDIR, WORKDIR)
  }
}