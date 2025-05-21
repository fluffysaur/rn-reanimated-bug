module.exports = {
    react: {
        upstreamTransformer: require.resolve("@expo/metro-config/babel-transformer"),
        debug: true,
    },
    android: {
        config: `
        dynatrace {
            configurations {
                defaultConfig {
                    autoStart {
                        applicationId 'xxx'
                        beaconUrl 'https://www.xxx.com'
                    }
                    hybridWebView {
                        enabled true
                        domains 'xxx.com', 'www.com'
                    }
                    agentBehavior.startupLoadBalancing true
                }
            }
        }
        `,
    },

    ios: {
        config: `
        <key>DTXApplicationID</key>
        <string>abcdefg</string>
        <key>DTXBeaconURL</key>
        <string>https://www.xxx.com</string>
        <key>DTXHybridApplication</key>
        <string>true</string>
        <key>DTXSetCookiesForDomain</key>
        <array>
            <string>xxx.com</string>
            <string>www.com</string>
        </array>
        <key>DTXStartupLoadBalancing</key>
        <true/>
        `,
    },
};
