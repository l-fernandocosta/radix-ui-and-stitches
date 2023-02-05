import '@fontsource/roboto';
import { globalCss } from '@stitches/core';

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, fontFamily: 'Roboto', boxSizing: 'border-box' },
  body: {
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
});
