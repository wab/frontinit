const svg4everybody = require('svg4everybody/dist/svg4everybody');
const __svg__ = { path: '../../icons/*.svg', name: 'svg/icons_[hash].svg' }
// will overwrite to var __svg__ = { filename: "svg/1466687804854.icons.svg" };

const pathsvg = '/dist/';

import svgxhr from '../util/svgxhr';

export default {
  init() {
    // JavaScript to be fired on all pages
    svg4everybody();
    new svgxhr(__svg__, pathsvg).loadsvg();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    $(document).foundation();

    console.log('hello');
  }
};
