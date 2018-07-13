export default ({
  backgroundColor,
  bodyColor,
  bodyFontFamily,
 }) => ({
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
      backgroundColor: bodyColor,
    },
    '.entry .entry-title .entry-date': {
      float: 'right',
      fontFamily: bodyFontFamily.join(','),
      fontWeight: 'normal',
    },
 })

