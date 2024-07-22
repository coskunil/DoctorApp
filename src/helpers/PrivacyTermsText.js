import { Text, Dimensions, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RFValue, wp, hp } from "../helpers/responsive"
import { slicePolicyAndTermsText } from "./TextSlice"
import { FONTS } from "../constants"
const height = Dimensions.get("window").height


const PrivacyTermsText = ({ fullText, terms, policy, onPress, style }) => {
	const navigation = useNavigation()
	let SlicedText = slicePolicyAndTermsText(fullText, terms, policy)
	return (
		<Text style={[styles.privacyText, { ...style }]}>
			{SlicedText.startText}{" "}
			<Text
				onPress={() => [
					onPress && onPress(),
					setTimeout(() => {
						navigation.navigate(`${SlicedText.firstNavigation}`)
					}, 500),
				]}
				style={styles.privacyButton}
			>
				{SlicedText.firstText}
			</Text>
			{SlicedText.middleText}
			<Text
				onPress={() => [
					onPress && onPress(),
					setTimeout(() => {
						navigation.navigate(`${SlicedText.secondNavigation}`)
					}, 500),
				]}
				style={styles.privacyButton}
			>
				{SlicedText.secondText}
			</Text>
			{SlicedText.lastText}
		</Text>
	)
}

const styles = StyleSheet.create({
	privacyText: {
		color: FONTS.primaryTextColor,
		fontSize: height <= 736 ? RFValue(14) : RFValue(12),
		fontFamily: FONTS.medium,
		textAlign: "center",
		width: wp(75),
		alignSelf: "center",
	},
	privacyButton: {
		color: FONTS.secondaryTextColor,
		fontSize: height <= 736 ? RFValue(14) : RFValue(12),
		fontFamily: FONTS.medium,
		padding: 0,
	},
})

export default PrivacyTermsText
