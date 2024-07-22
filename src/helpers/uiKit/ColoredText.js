import React, { useEffect, useRef, useState } from "react"
import { Text, View, Image, Dimensions, Platform } from "react-native"
import { COLORS, FONTS, images } from "../../constants"
import { sliceColoredText, sliceSpecialText } from "../TextSlice"
import { RFValue, wp, hp } from "../responsive"

const ColoredText = ({
	fullText,
	coloredText,
	tintColor = FONTS.primaryColor,
	type,
	size,
	style,
	width = wp(90),
	textAlign = "center",
	alignSelf = "flex-start",
}) => {
	let SlicedText =
		type === "specific" ? sliceSpecialText(fullText) : sliceColoredText(fullText, coloredText)
	const height = Dimensions.get("window").height

	const android = () => {
		return (
			<Text
				style={{
					color: tintColor,
					fontSize: size ? size : height <= 736 ? RFValue(21) : RFValue(18),
					fontFamily: FONTS.semibold,
					alignSelf,
				}}
			>
				{coloredText}
			</Text>
		)
	}

	const ios = () => {
		return (
			<Text
				style={{
					color: tintColor,
					fontSize: size ? size : height <= 736 ? RFValue(19) : RFValue(16),
					fontFamily: FONTS.semibold,
				}}
			>
				{coloredText}
			</Text>
		)
	}

	return (
		<>
			{type === "specific" ? (
				<Text
					style={{
						fontSize: size ? size : height <= 736 ? RFValue(20) : RFValue(16),
						color: FONTS.primaryColor,
						fontFamily: FONTS.medium,
						textAlign,
						width,
						...style,
					}}
				>
					{SlicedText.startText} {Platform.OS === "android" ? android() : ios()}
					{SlicedText.lastText}
				</Text>
			) : (
				<Text
					style={{
						fontSize: size ? size : height <= 736 ? RFValue(19) : RFValue(16),
						color: FONTS.primaryColor,
						fontFamily: FONTS.regular,
						textAlign,
						width,
						...style,
					}}
				>
					{SlicedText.startText} {Platform.OS === "android" ? android() : ios()}
					{SlicedText.lastText}
				</Text>
			)}
		</>
	)
}

export default ColoredText
