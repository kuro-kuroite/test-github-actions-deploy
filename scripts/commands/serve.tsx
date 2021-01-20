import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PureServe: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("node ./dist/index.js").stdout}
		</Text>
	</Box>
;

const Serve: VFC<Props> = () => {
	return <PureServe />;
};

export default Serve;

export type PureProps = Props;

export type Props = Record<string, string>;
