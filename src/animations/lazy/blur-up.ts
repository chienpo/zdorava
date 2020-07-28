export const lazyBlurUp = `
  display: block;
  width: 100%;
  max-width: none;
  transition: opacity 0.8s;
  object-fit: cover;

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
    filter: blur(5px) grayscale(0);
    visibility: hidden;
    transition: filter 0.8s, visibility 0.8s;
  }

  &.blur-up.lazyloaded {
    visibility: visible;
    filter: blur(0) grayscale(100);
  }
`;
