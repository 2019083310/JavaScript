// 一套默认主题及一套暗黑主题
// 其中主题颜色我们采用了rgba的写法，因为有可能我们需要在不用的地方使用同一主题色，但是透明度不一样。
export const themes = {
  default: {
    primaryColor: `${74},${144},${226}`,
    primaryTextColor: `${74}, ${144},${226}`,
  },
  dark: {
    primaryColor: `${0},${0},${0}`,
    primaryTextColor: `${0},${0},${0}`,
  },
}