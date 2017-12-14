const roll = () => {
  const current = document.documentElement.scrollTop || document.body.scrollTop
  const xCoord = 0
  const yCoord = current - current / 8

  if (current > 0) {
    requestAnimationFrame(roll)
    scrollTo(xCoord, yCoord)
  }
}

module.exports = roll
