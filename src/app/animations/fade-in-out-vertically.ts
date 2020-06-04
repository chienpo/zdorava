import posed from 'react-pose';

export const FadeInOutVertically = posed.div({
  enter: {
    transition: {
      default: { duration: 400 },
    },
    opacity: 1,
    zIndex: 5,
    top: 0,
  },
  exit: {
    transition: { duration: 400 },
    zIndex: 5,
    top: '-100%',
  },
});
