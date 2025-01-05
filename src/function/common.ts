export function getColorTheme(theme: string) {
  if(theme === 'green') {
    return colorReturner(92, 179, 56);
  } else if(theme === 'blue') {
    return colorReturner(91, 153, 194);
  } else {
    return [195, 128, 250, 167, 96, 218, 243, 182, 248, 135, 64, 186];
  }
}

function colorReturner(red: number, green: number, blue: number) {
  const normalRed = red ? red : 195;
  const normalGreen = green ? green : 128;
  const normalBlue = blue ? blue : 250;

  const deepRed = red ? red - 28 > 0 ? red - 28 : 0 : 167;
  const deepGreen = green ? green - 28 > 0 ? green - 28 : 0 : 96;
  const deepBlue = blue ? blue - 28 > 0 ? blue - 28 : 0 : 218;

  const lightRed = red ? red + 28 < 255 ? red + 28 : 255 : 243;
  const lightGreen = green ? green + 28 < 255 ? green + 28 : 255 : 182;
  const lightBlue = blue ? blue + 28 < 255 ? blue + 28 : 255 : 248;

  const typoRed = red ? red - 56 > 0 ? red - 56 : 0 : 135;
  const typoGreen = green ? green - 56 > 0 ? green - 56 : 0 : 64;
  const typoBlue = blue ? blue - 56 > 0 ? blue - 56 : 0 : 186;
  return [normalRed, normalGreen, normalBlue, deepRed, deepGreen, deepBlue, lightRed, lightGreen, lightBlue, typoRed, typoGreen, typoBlue];
}