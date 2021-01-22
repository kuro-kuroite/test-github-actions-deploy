import React, {VFC} from "react";
import {Box, Text} from "ink";
import {exitCommandSync} from "../src/utils/command";

export const PureBuild: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{exitCommandSync("npx rome bundle ./src/index.ts dist/")}
		</Text>
	</Box>
;

const Build: VFC<Props> = () => {
	return <PureBuild />;
};

export default Build;

export type PureProps = Props;

export type Props = Record<string, string>;
