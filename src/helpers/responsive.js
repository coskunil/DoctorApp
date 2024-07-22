import { Platform, StatusBar, Dimensions, PixelRatio } from 'react-native'

// iPhone X ve benzeri cihazları kontrol etmek için kullanılan fonksiyon
const isIPhoneXOrSimilar = () => {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  )
}

const { width, height } = Dimensions.get('window')

// Standart ekran boyutları (genişlik ve yükseklik)
const standardScreenHeight = 736
const standardScreenWidth = 375

// Ekran boyutlarını hesaplamak için kullanılan fonksiyon
const calculateDimension = (elemDimension, percentValue) => {
  const numericValue =
    typeof percentValue === 'number' ? percentValue : parseFloat(percentValue)
  return PixelRatio.roundToNearestPixel((elemDimension * numericValue) / 100)
}

// Genişlik (width) için yüzde hesaplama fonksiyonu
const calculateWidthPercent = widthPercent =>
  calculateDimension(width, widthPercent)

// Yükseklik (height) için yüzde hesaplama fonksiyonu
const calculateHeightPercent = heightPercent =>
  calculateDimension(height, heightPercent)

// Responsive font boyutu hesaplamak için kullanılan fonksiyon
const calculateResponsiveFontSize = fontSize => {
  const standardLength = width > height ? width : height
  const offset =
    width > height
      ? 0
      : (Platform.OS === 'ios' ? 78 : StatusBar.currentHeight) || 0
  const deviceHeight =
    isIPhoneXOrSimilar() || Platform.OS === 'android'
      ? height - offset
      : standardLength
  const deviceWidth =
    isIPhoneXOrSimilar() || Platform.OS === 'android' ? width : standardLength

  const widthPercent = (fontSize * deviceWidth) / standardScreenWidth
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
  const scaledFontSize = Math.min(widthPercent, heightPercent)

  return PixelRatio.roundToNearestPixel(scaledFontSize)
}

export {
  calculateWidthPercent as wp,
  calculateHeightPercent as hp,
  calculateResponsiveFontSize as RFValue,
  height,
  width,
}
