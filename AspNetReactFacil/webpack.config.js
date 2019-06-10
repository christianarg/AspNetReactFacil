const path = require('path');

module.exports = {
    //entry: "./Scripts/HelloWorld/HelloWorld.tsx",
    entry: {
        helloWorld: "./Scripts/HelloWorld/HelloWorldApp.tsx",
        helloWorldSpec: "./Scripts/Tests/Helloworld.spec.tsx",
        reactTutorial: "./Scripts/ReactTutorial/index.tsx",
        thinkingInReact: "./Scripts/ThinkingInReact/index.tsx",
    },
    output: {
        filename: "bundle.[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};