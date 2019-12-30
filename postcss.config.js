const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

module.exports = {
    // order is important here
    plugins: [
        postcssImport,
        postcssCssNext,
    ]
};