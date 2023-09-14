const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
};
