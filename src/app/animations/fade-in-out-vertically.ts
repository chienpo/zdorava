import posed from 'react-pose';

export const FadeInOut = posed.div({
  open: {
    opacity: 0,
    transition: {
      duration: 400,
    },
  },
  enter: {
    transition: {
      duration: 400,
    },
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 400,
    },
  },
});

FadeInOut.defaultProps = {
  initialPose: 'open',
};

export const FadeInOutVertically = posed.div({
  enter: {
    transition: {
      default: { duration: 800 }
    },
    opacity: 1,
    zIndex: 3,
    top: 0,
  },
  exit: {
    transition: { duration: 800 },
    zIndex: 3,
    top: '-100%'
  },
});
