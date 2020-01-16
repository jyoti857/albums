module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['@react-native-community'],
  //  'rallycoding'],
  plugins: ['prettier'],
  // rules: ['no-inline-styles',]
  rules: {
    // "no-inline-styles": "off",
    "react-native/no-inline-styles": 0,
    "no-shadow": [0, { "builtinGlobals": false, "hoist": "functions", "allow": [] }]
  }
};
