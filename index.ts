import {name} from "./src/name";

async function main() {
	console.log(`hello ${name}`);
}

(async () => {
	await main();
})();
