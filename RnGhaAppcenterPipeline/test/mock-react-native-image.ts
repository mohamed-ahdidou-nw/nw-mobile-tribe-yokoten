/* eslint-disable @typescript-eslint/no-unused-vars */
import * as ReactNative from "react-native";
import mockFile from "./mock-file";

jest.doMock("react-native", () =>
// Extend ReactNative
	Object.setPrototypeOf(
		{
			Image: {
				...ReactNative.Image,
				resolveAssetSource: jest.fn((source) => mockFile),
				getSize: jest.fn(
					(
						uri: string,
						success: (width: number, height: number) => void,
						failure?: (error: never) => void,
					) => {
						success(100, 100);
					},
				),
			},
		},
		ReactNative,
	),
);
