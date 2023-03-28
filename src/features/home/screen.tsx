import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	Plus, Shuffle, Twitter
} from "@tamagui/lucide-icons";
import React, { FC } from "react";
import {
	Anchor,
	Button,
	H1,
	ListItem,
	ScrollView,
	Separator,
	XGroup,
	YGroup,
	YStack
} from "tamagui";

import { AlbumEntry } from "../../components/entry";
import { MyStack } from "../../components/MyStack";
import { LinkToUser } from "./link-to-user";

export const HomeScreen: FC<
	NativeStackScreenProps<StackNavigatorParams, "home">
> = ({ navigation }) => {
	const data = [
		[
			"Bohemian Rhapsody",
			"Queen",
			"https://www.udiscovermusic.com/wp-content/uploads/2019/03/Queen-II-album-cover-820.jpg"
		],
		[
			"Sky",
			"Playboi Carti",
			"https://upload.wikimedia.org/wikipedia/en/6/6c/Playboi_Carti_-_Whole_Lotta_Red.png"
		]
	];
	const songList = data.map((song, index) => {
		return (
			<AlbumEntry
				songTitle={song[0]}
				artist={song[1]}
				albumCover={song[2]}
				key={index}
			/>
		);
	});
	return (
		<MyStack>
			<YStack
				space="$4"
				maxWidth={600}
			>
				<H1
					textAlign="center"
					paddingTop="$8"
				>
					Spotafly
				</H1>
				<XGroup
					marginTop="$2"
					size="$6"
					backgroundColor="#ffffff"
					alignSelf="center"
					space="$10"
				>
					<Button
						w="$10"
						backgroundColor="#1db954"
						color="#000000"
						icon={<Shuffle size="$2" />}
					/>
					<Button
						w="$10"
						backgroundColor="#1db954"
						color="#000000"
						icon={<Plus size="$2" />}
					/>
				</XGroup>
				<ScrollView marginTop="$2">{songList}</ScrollView>
			</YStack>

			<YStack space="$5">
				<LinkToUser navigation={navigation} />
				<YGroup
					width="100%"
					separator={<Separator />}
				>
					<ListItem icon={Twitter}>
						<Anchor
							href="https://twitter.com/natebirdman"
							target="_blank"
						>
							Nate
						</Anchor>
					</ListItem>
				</YGroup>
			</YStack>
		</MyStack>
	);
};
