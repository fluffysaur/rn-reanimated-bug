module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            [
                "babel-preset-expo",
                {
                    jsxRuntime: "automatic", // Enables the new JSX runtime
                    jsxImportSource: "@dynatrace/react-native-plugin", // Specifies Dynatrace for JSX transforms
                },
            ],
        ],
        plugins: ["react-native-reanimated/plugin"],
    };
};
