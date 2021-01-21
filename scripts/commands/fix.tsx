import React, {VFC} from "react";
import {Box, Text} from "ink";
import {exitCommandSync} from "../src/utils/command";

export const PureFix: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{exitCommandSync("npx rome check --apply")}
		</Text>
	</Box>
;

const Fix: VFC<Props> = () => {
	return <PureFix />;
};

export default Fix;

export type PureProps = Props;

export type Props = Record<string, string>;
