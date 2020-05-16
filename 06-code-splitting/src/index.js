// 动态导入的模块会自动分包
import('./logger').then(({ log }) => {
  log('code splitting~')
})
