module.exports = {
  // globals: {
  //   "ts-jest": {
  //       tsconfig: "tsconfig.json"
  //   }
  // },
  moduleFileExtensions: [
      "ts",
      "js"
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    // This will load the SWC configuration from .swcrc by default.
    // https://github.com/swc-project/jest
    "^.+\\.(ts|tsx)$": ["@swc/jest"]
  },
  testMatch: [
      "**/test/**/*.test.(ts|js)"
  ],
  testEnvironment: "node"
};
