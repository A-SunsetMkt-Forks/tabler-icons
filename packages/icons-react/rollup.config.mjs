import { getRollupConfig } from '../../.build/build-icons.mjs'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export default getRollupConfig({
  name: 'icons-react',
  globals: {
    react: 'react',
    'prop-types': 'PropTypes'
  },
  external: ['react', 'prop-types'],
  pkg
})