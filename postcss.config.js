module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'autoprefixer': {},
        'postcss-font-magician': {
            'variants': {
                'Roboto Condensed': {
                    '300': [],
                    '400': [],
                    '700': []
                }
            },
            'foundries': ['google']
        },
        "cssnano": {
            "preset": [
                "default",
                { "discardComments": { "removeAll": true } }
            ]
        }
    }
}