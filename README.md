# Welder - Dockerfile SDK

Use **_Welder - Dockerfile SDK_** to parse, edit, and create dockerfiles in TypeScript.

## Usage

```typescript
import * as welderSDK from "welder-dockerfile-sdk"

const myDockerfile = welderAST.parse("dockerfile source")

myDockerfile.instructions.forEach((instructions, index) => {
  console.log({
        index: index,
        instruction: instruction.name,
        value: instruction.value
      })
})
```

Inspiration - The following projects have been an inspiratation in the creation of this project
- [https://github.com/rcjsuen/dockerfile-ast](rcjsuen/dockerfile-ast)
- [https://github.com/replicatedhq/dockerfilelint](replicatedhq/dockerfilelint)