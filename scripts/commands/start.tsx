import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PureStart: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("npx rome run ./src/index.ts").stdout}
		</Text>
	</Box>
;

const Start: VFC<Props> = () => {
	return <PureStart />;
};

export default Start;

export type PureProps = Props;

export type Props = Record<string, string>;
