build({
  "input": {
    "include": "**/*.js",
    "exclude": "build.json build.js"
  },
  "output": {
    "path": "../build",
    "mode": "0755",
    "clean": true
  },
  "uglify": {
    "mangle": {
      "defines": {
        "DEBUG": [
          "name",
          "false"
        ]
      }
    },
    "squeeze": {
      "make_seqs": true,
      "dead_code": true
    },
    "gen": {}
  }
})