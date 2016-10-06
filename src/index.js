export const parser = {
  argumentSchema: {
    "type": "object",
    "properties":{
      "typescript": {
        "type": "boolean",
        "default": true,
        "help": "whether to compile with typescript"
      }
    }
  },
  presets: {
    TYPESCRIPT(args){
      args.entry = args.entry || './src/index.ts'
      return args
    }
  }
}


export const webpackConfiguration = {
  builders: {
    resolveTypescript({ resolve: { extensions = [], ...resolve } = {} }) {
      resolve.extensions = [ ...extensions, '.ts', '.tsx' ]
      return { resolve }
    }
  },
  moduleLoaders: {
    'typescript': { test: /\.tsx?$/, loader: "ts-loader" }
  },
}

