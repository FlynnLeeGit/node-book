import baseConf from './base.conf'
import devConf from './dev.conf'
import prodConf from './prod.conf'
import _ from 'lodash'

const ENV = process.env.NODE_ENV || 'development'

let config = baseConf

if (ENV === 'development') {
  config = _.merge({}, baseConf, devConf)
}

if (ENV === 'production') {
  config = _.merge({}, baseConf, prodConf)
}

export default config
