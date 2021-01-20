import {name} from "./name";
import {helloWorld} from "./helloWorld";

async function main() {
	console.log(helloWorld(name));
}

(async () => {
	await main();
})();
