import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PureFix: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("npx rome check --apply").stdout}
		</Text>
	</Box>
;

const Fix: VFC<Props> = () => {
	return <PureFix />;
};

export default Fix;

export type PureProps = Props;

export type Props = Record<string, string>;
