import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PureBuild: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("npx rome bundle ./src/index.ts dist/").stdout}
		</Text>
	</Box>
;

const Build: VFC<Props> = () => {
	return <PureBuild />;
};

export default Build;

export type PureProps = Props;

export type Props = Record<string, string>;
