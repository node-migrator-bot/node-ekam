build(
{
	"input": {
		"include": "**/*.js"
	,	"exclude": "*.json build.js"
	}
,	"output": {
		"path": "../www"
	,	"mode": "0755"
	,	"clean": true
	}
,	"uglify": {
		"mangle": {
			"defines": {
				"DEBUG": ["name","false"]
			}
		}
	,	"squeeze": {
			"make_seqs": true
		,	"dead_code": true
		}
	,	"gen": {}
	}
}
, function (err, files) {
 console.log('done', files)
}
)
