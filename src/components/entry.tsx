import { Info } from "@tamagui/lucide-icons";
import React, { FC } from "react";
import { Image, XGroup, H4, YGroup, Text, Button } from "tamagui";

export const AlbumEntry: FC<string, string, string> = ({ albumCover, songTitle, artist }) => {
	return (
		<XGroup size="$6" backgroundColor="#ffffff" space="$4" marginBottom="$3">
		<Image
			borderRadius={6}
			src={albumCover}
			width={60}
			height={60}
		/>
		<YGroup backgroundColor="#ffffff" alignSelf="center" flex={true}>
			<H4>{songTitle}</H4>
			<Text>{artist}</Text>
		</YGroup>
		<YGroup backgroundColor="#ffffff" alignSelf="center">
			<Button w="$4" backgroundColor="#ffffff" color="#000000" icon={<Info size="$1.5"/>}></Button>
		</YGroup>
		</XGroup>
	);
};
