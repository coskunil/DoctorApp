module.exports = api => {
  const babelEnv = api.env();
  const plugins = [
    ['@babel/plugin-transform-flow-strip-types'],
    ['react-native-reanimated/plugin']
  ];
  //change to 'production' to check if this is working in 'development' mode
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console']);
  }
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
