import React, {VFC} from "react";
import {Box, Text} from "ink";
import {exitCommandSync} from "../src/utils/command";

export const PureCheckType: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{exitCommandSync("tsc -p . --noEmit")}
			{exitCommandSync("tsc -p ./scripts/ --noEmit")}
		</Text>
	</Box>
;

const CheckType: VFC<Props> = () => {
	return <PureCheckType />;
};

export default CheckType;

export type PureProps = Props;

export type Props = Record<string, string>;
