/*https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript*/


function hsl(hex, object) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  var r = parseInt(result[1], 16) / 255
  var g = parseInt(result[2], 16) / 255
  var b = parseInt(result[3], 16) / 255
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  var h,
    s,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
      default:
    }
    h /= 6
  }
  var fh = Math.round(360 * h)
  var fs = Math.round(s * 100)
  var fl = Math.round(l * 100)

  return object
    ? { h: fh, s: fs, l: fl }
    : 'hsl(' + fh + ', ' + fs + '%, ' + fl + '%)'
}
