import {name} from "./src/name";
import {helloWorld} from "./src/helloWorld";

async function main() {
	console.log(helloWorld(name));
}

(async () => {
	await main();
})();
