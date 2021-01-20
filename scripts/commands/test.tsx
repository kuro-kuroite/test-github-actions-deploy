import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PureTest: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("npx rome test").stdout}
		</Text>
	</Box>
;

const Test: VFC<Props> = () => {
	return <PureTest />;
};

export default Test;

export type PureProps = Props;

export type Props = Record<string, string>;
