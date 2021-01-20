import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PureCheck: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("npx rome check").stdout}
		</Text>
	</Box>
;

const Check: VFC<Props> = () => {
	return <PureCheck />;
};

export default Check;

export type PureProps = Props;

export type Props = Record<string, string>;
