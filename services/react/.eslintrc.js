module.exports = {
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 2015,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread": true
		}
	},
	"extends": [
		// "plugin:node/recommended",
		"eslint:recommended"
	],
	"rules": {
		"quotes": [1, "single", "avoid-escape"],
		"no-console": 0,
		"no-alert": 0,
		"no-trailing-spaces": 0,
		"no-unused-vars": 0,
		"semi": 1,
		// "node/exports-style": [
		// 	"error",
		// 	"exports",
		// 	{
		// 		"allowBatchAssign": true
		// 	}
		// ],
		"async-await/space-after-async": 0,
		"async-await/space-after-await": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/prop-types": "off",
		"jsx-a11y/href-no-hash": "off",
		"jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
	},
	"plugins": [
		// "node",
		"react",
		"import",
		"jsx-a11y",
		"async-await"
	],
	"env": {
		"browser": true,
		"commonjs": true,
		"node": true,
		"es6": true
	},
	"globals": {}
}