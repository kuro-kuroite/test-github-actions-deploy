import React, {VFC} from "react";
import {Box, Text} from "ink";
import {exitCommandSync} from "../src/utils/command";

export const PureServe: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{exitCommandSync("node ./dist/index.js")}
		</Text>
	</Box>
;

const Serve: VFC<Props> = () => {
	return <PureServe />;
};

export default Serve;

export type PureProps = Props;

export type Props = Record<string, string>;
