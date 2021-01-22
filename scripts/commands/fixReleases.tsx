import React, {VFC} from "react";
import {Box, Text} from "ink";
import {exitCommandSync} from "../src/utils/command";

export const PureFixReleases: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{exitCommandSync("npx rome check package.json CHANGELOG.md --apply")}
		</Text>
	</Box>
;

const FixReleases: VFC<Props> = () => {
	return <PureFixReleases />;
};

export default FixReleases;

export type PureProps = Props;

export type Props = Record<string, string>;
