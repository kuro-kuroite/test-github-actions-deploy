import React, {FC} from "react";
import {Box, Text} from "ink";
import {command} from "../src/utils/command";

export const PureHello: FC<PureProps> = ({robotName}) =>
	<>
		<Box flexDirection="column">
			<Text>
				こんにちは！私は
				{robotName}
				です。あなたの名前は何ですか？
			</Text>
			<Text>
				Hello, I am
				{robotName}
				. What is your name?
			</Text>
		</Box>
		<Box flexDirection="column">
			<Text>
				{command("npx rome check").stdout}
			</Text>
		</Box>
	</>
;

const Hello: FC<Props> = ({robotName}) => {
	return <PureHello robotName={robotName} />;
};

export default Hello;

export type PureProps = Props;

export type Props = {
	robotName: string;
};
