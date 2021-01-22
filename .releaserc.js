module.exports = {
	branches: ["main"],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		"@semantic-release/npm",
		[
			"@semantic-release/exec",
			{
				"prepareCmd": "pwd && ls && npx scripts fixReleases",
			},
		],
		"@semantic-release/github",
		"@semantic-release/git",
	],
};
