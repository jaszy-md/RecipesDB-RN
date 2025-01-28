module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./App'],
        alias: {
          assets: './Assets',
          components: './Components',
          containers: './Containers',
          helpers: './Helpers',
          navigation: './Navigation',
          schemas: './Schemas',
          services: './Services',
          theme: './Theme',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
