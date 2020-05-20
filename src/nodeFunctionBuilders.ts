export const start = (fileName: string, inputValues: string): string => {
  return `function ${fileName}(${inputValues}) {\n`;
};

export const end = (nodeConnectingToOutput: string | undefined): string => {
  return nodeConnectingToOutput
    ? `  return ${nodeConnectingToOutput};\n}\n`
    : `}\n`;
};

const logger = (whatToLog: string): string => {
  return `console.log(${whatToLog});\n`;
};

const adder = (resultName: string, a: string, b: string): string => {
  return `const ${resultName} = ${a} + ${b};`;
};

const ifStatement = (
  resultName: string,
  test: string,
  a: string,
  b: string
): string => {
  return `const ${resultName} = ${test} ? ${a} : ${b};`;
};

const unknown = (): string => "";

export const builders = {
  logger,
  adder,
  ifStatement,
  unknown,
};