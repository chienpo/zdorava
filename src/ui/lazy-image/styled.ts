export const lazyBlurUp = `
  transition: opacity 0.8s;

  /* fade image in after load */
  &.lazyload,
  &.lazyloading {
    opacity: 0;
  }

  /* fade image in while loading and show a spinner as background image (good for progressive images) */
  &.lazyload {
    opacity: 0;
  }

  &.lazyloaded {
    opacity: 1;
    transition: opacity 4s;
  }

  &.lazyloading {
    background: yellow no-repeat center;
  }

  /* other */
  &.blur-up {
    filter: blur(5px);
    visibility: hidden;
    transition: filter 1.6s, visibility 1.6s;
  }

  &.blur-up.lazyloaded {
    visibility: visible;
    filter: blur(0);
  }
`;
