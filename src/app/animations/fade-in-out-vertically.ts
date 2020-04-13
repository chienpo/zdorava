import posed from 'react-pose';

export const FadeInOut = posed.div({
  enter: {
    transition: {
      duration: 200,
      delay: 400,
    },
    opacity: 1,
    zIndex: 3,
  },
  exit: {
    opacity: 0,
    zIndex: 3,
    transition: {
      duration: 200,
      delay: 400,
    },
  },
});

export const FadeInOutVertically = posed.div({
  enter: {
    transition: {
      default: { duration: 400 }
    },
    opacity: 1,
    zIndex: 3,
    top: 0,
  },
  exit: {
    transition: { duration: 400 },
    zIndex: 3,
    top: '-100%'
  },
});
