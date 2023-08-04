export const openClosedAnimationVariants = {
  initial: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: 0.4, ease: 'easeIn' },
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.4, staggerChildren: 0.1, ease: 'easeIn' },
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

export const researchFormURL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdTY6z7VlkzIfCBuZdNxEndCflzRoXr4w14CPYvknfNYKQCdQ/viewform';
