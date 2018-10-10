export  default {
  "disableCSSModules": true,
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  "externals": {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  // "theme": './src/theme.js',
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
}
