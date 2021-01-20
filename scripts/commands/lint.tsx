import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PureLint: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("npx rome check").stdout}
		</Text>
	</Box>
;

const Lint: VFC<Props> = () => {
	return <PureLint />;
};

export default Lint;

export type PureProps = Props;

export type Props = Record<string, string>;
