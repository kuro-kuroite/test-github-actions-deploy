import React, {VFC} from "react";
import {Box, Text} from "ink";
import {exitCommandSync} from "../src/utils/command";

export const PureCheck: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{exitCommandSync("npx rome check")}
		</Text>
	</Box>
;

const Check: VFC<Props> = () => {
	return <PureCheck />;
};

export default Check;

export type PureProps = Props;

export type Props = Record<string, string>;
