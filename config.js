class BaseConfig {
  constructor (name) {
    this.name = name
    this.loadConfig(CONFIG_LIST[name])
  }
  loadConfig (config) {
    if (!config) return
    for (let key in config) {
      this[key] = config[key]
    }
  }
  vueBase () {
  }
  apiBase () {
  }
  // 自动生成脚本
  autoCoding () {
    this.generateApi()
    this.generateVue()
  }
  generateApi () {
    this.checkApiFile()
    this.insertApi()
  }

  checkApiFile () {

  }

  insertApi () {
  }

  generateVue () {
    this.checkVueFile()
    this.insertTemplate()
    this.insertScript()
    this.insertCSS()
  }
  checkVueFile () {

  }
  insertTemplate () {

  }
  insertScript () {

  }

  insertCSS () {

  }
}

const CONFIG_LIST = {
}