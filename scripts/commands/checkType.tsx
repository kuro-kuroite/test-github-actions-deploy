import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PureCheckType: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("tsc -p . --noEmit").stdout}
			{commandSync("tsc -p ./scripts/ --noEmit").stdout}
		</Text>
	</Box>
;

const CheckType: VFC<Props> = () => {
	return <PureCheckType />;
};

export default CheckType;

export type PureProps = Props;

export type Props = Record<string, string>;
