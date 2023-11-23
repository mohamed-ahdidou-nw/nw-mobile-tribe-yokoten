import * as React from "react";
import { View, type ImageStyle } from "react-native";
import { AutoImage as Image } from "../auto-image/auto-image";
import { type IconProps } from "./icon.props";
import { icons } from "./icons";

const ROOT: ImageStyle = {
	resizeMode: "contain"
};

export function Icon (props: IconProps) {
	const { style: styleOverride, icon, containerStyle } = props;

	return (
		<View style={containerStyle}>
			<Image style={[ROOT, styleOverride]} source={icons[icon]} />
		</View>
	);
}
