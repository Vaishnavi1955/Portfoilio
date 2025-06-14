const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: isGithubPages ? '/Portfoilio/' : '',
  output: 'export',
  images: {
    unoptimized: true
  }
};
