export function slideInFromRight(delay = 0.1) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
    // exit: {
    //   opacity: 0,
    //   scale: 0,
    // },
  };
}

export function slideInFromRightScale(delay = 0.1) {
  return {
    hidden: { x: 100, opacity: 0, scale: 0 },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
}
