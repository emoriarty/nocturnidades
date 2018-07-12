import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

const backgroundColor = '#fff';

kirkhamTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: kirkhamTheme.bodyColor,
  },
  'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
    textDecoration: 'none',
  },
  'body': {
    backgroundColor,
  },
  '.entry a': {
    boxShadow: 'none',
    display: 'block',
    textDecoration: 'none',
  },
  '.entry .entry-title': {
    transition: 'all .2s ease',
  },
  '.entry > a:hover .entry-title': {
    color: backgroundColor,
    backgroundColor: options.bodyColor,
  },
  '.entry .entry-title .entry-date': {
    float: 'right',
    fontFamily: options.bodyFontFamily.join(','),
    fontWeight: 'normal',
  },
});

const typography = new Typography(kirkhamTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
