import React, {FC} from "react";
import {Box, Text} from "ink";

export const PureHello: FC<PureProps> = ({robotName}) =>
	<Box flexDirection="column">
		<Text>
			こんにちは！私は
			{robotName}
			です。
		</Text>
		<Text>
			Hello, I am
			{robotName}
			.
		</Text>
	</Box>
;

const Hello: FC<Props> = ({robotName}) => {
	return <PureHello robotName={robotName} />;
};

export default Hello;

export type PureProps = Props;

export type Props = {
	robotName: string;
};
