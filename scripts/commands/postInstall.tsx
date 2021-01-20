import React, {VFC} from "react";
import {Box, Text} from "ink";
import {commandSync} from "../src/utils/command";

export const PurePostInstall: VFC<PureProps> = () =>
	<Box flexDirection="column">
		<Text>
			{commandSync("npx patch-package && npx typesync").stdout}
		</Text>
	</Box>
;

const PostInstall: VFC<Props> = () => {
	return <PurePostInstall />;
};

export default PostInstall;

export type PureProps = Props;

export type Props = Record<string, string>;
