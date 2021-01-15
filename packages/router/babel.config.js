module.exports={
    "env": {
        "test": {
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }
    },
    "presets": [
        [ "@babel/preset-env"],
        [ "@babel/preset-react"],
        [
            "@babel/preset-typescript"
        ]
    ],
    "plugins": ["@babel/plugin-transform-runtime"]
}