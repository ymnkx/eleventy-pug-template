const input_dir = 'pages';
let output_dir = 'dist';
if (process.env.NODE_ENV === 'production') output_dir = 'build';

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
  return {
    dir: {
      input: input_dir,
      output: output_dir,
    },
  };
};
