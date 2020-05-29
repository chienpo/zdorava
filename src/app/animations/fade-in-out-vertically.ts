import posed from 'react-pose';

export const FadeInOut = posed.div({
  enter: {
    transition: {
      default: { duration: 400 },
      delay: 400,
    },
    opacity: 1,
    zIndex: 5,
  },
  exit: {
    opacity: 0,
    zIndex: 5,
    transition: {
      duration: 200,
      delay: 400,
    },
  },
});

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
