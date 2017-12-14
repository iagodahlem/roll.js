const roll = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop

  if (c > 0) {
    window.requestAnimationFrame(roll)
    window.scrollTo(0, c - c/8)
  }
}

export default roll
