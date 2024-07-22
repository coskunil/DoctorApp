import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import LinearGradient from 'react-native-linear-gradient'
import { animations, FONTS, images } from "../../constants"
import { RFValue, wp, hp } from "../responsive"

const GradientText = ({
  text,
  position = 'relative',
  gradient = ['#FFB932', '#FF5732'],
}) => {
  const [textHeight, setTextHeight] = useState(0)

  const handleTextLayout = event => {
    const integerNumber = Math.floor(
      event.nativeEvent.lines[0].height * event.nativeEvent.lines.length,
    )
    setTextHeight(integerNumber)
  }

  useEffect(() => { }, [textHeight])

  return (
    <MaskedView
      style={{
        flexDirection: 'row',
        height: textHeight,
      }}
      maskElement={
        <Text
          onTextLayout={handleTextLayout}
          style={{
            width: wp(75),
            fontSize: RFValue(22),
            fontFamily: FONTS.black,
            lineHeight: 30,
            textAlign: 'center',
            alignSelf: 'center',
            color: 'black',
          }}>
          {text}
        </Text>
      }>
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  )
}

export default GradientText
