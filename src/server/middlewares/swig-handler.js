import Path from 'path'
import Fse from 'fs-extra'
import swig from 'swig-templates'

function swigRender({ base, ext = '.html' } = {}) {
  if (!base) {
    throw new Error('[swig-handler] shoudl provide [base] prop')
  }
  return app => {
    app.context.render = async function(v, params = {}) {
      const viewFile = Path.resolve(base, v) + ext
      const template = swig.compileFile(viewFile)
      this.body = template(params)
    }
  }
}

export default swigRender
