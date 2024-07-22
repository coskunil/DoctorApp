import React from "react"
import { Text, StyleSheet, Dimensions } from "react-native"
import { COLORS, FONTS } from "../../constants"
import { RFValue, wp, hp } from "../responsive"
const height = Dimensions.get("window").height

const CustomText = ({
	fullText,
	props,
	fontSize = (height <= 736 && RFValue(17)) ||
	(height < 886 && height > 736 && RFValue(15)) ||
	(height > 886 && RFValue(14)),
	color = "#666F7D",
	fontFamily = FONTS.medium,
	marginTop,
	marginBottom,
	marginLeft,
	textAlign = "center",
	alignSelf = "center",
	width = wp(85),
	style,
}) => {
	return (
		<Text
			style={{
				alignSelf,
				width,
				textAlign,
				fontFamily,
				color,
				fontSize,
				marginBottom,
				marginTop,
				marginLeft,
			}}
			{...props}
		>
			{fullText}
		</Text>
	)
}

export default CustomText
