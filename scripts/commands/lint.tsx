import React, {VFC} from "react";
import {Box, Text} from "ink";
import {exitCommandSync} from "../src/utils/command";

export const PureLint: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{exitCommandSync("npx rome check")}
		</Text>
	</Box>
;

const Lint: VFC<Props> = () => {
	return <PureLint />;
};

export default Lint;

export type PureProps = Props;

export type Props = Record<string, string>;
