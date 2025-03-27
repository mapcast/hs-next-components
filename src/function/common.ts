export function getColorTheme(theme: string, custom?: HSColors): HSColors {
  if(theme === 'monoton') {
    return {
      normal: {
        red: 126,
        green: 126,
        blue: 126,
      },
      deep: {
        red: 68,
        green: 68,
        blue: 68,
      },
      light: {
        red: 238,
        green: 238,
        blue: 238,
      },
      typo: {
        red: 34,
        green: 34,
        blue: 34,
      },
      background: {
        red: 255,
        green: 255,
        blue: 255,
      },
    };
  } else if(theme === 'green') {
    return colorReturner(92, 179, 56);
  } else if(theme === 'blue') {
    return colorReturner(91, 153, 194);
  } else if(theme === 'seekers') {
    return {
      normal: {
        red: 186,
        green: 220,
        blue: 0,
      },
      deep: {
        red: 34,
        green: 34,
        blue: 34,
      },
      light: {
        red: 54,
        green: 69,
        blue: 79,
      },
      typo: {
        red: 250,
        green: 250,
        blue: 250,
      }
    };
  } else if(theme === 'custom' && custom) {
    return custom;
  } else {
    return {
      normal: {
        red: 195,
        green: 128,
        blue: 250,
      },
      deep: {
        red: 167,
        green: 96,
        blue: 218,
      },
      light: {
        red: 243,
        green: 182,
        blue: 248,
      },
      typo: {
        red: 135,
        green: 64,
        blue: 186,
      },
    };
  }
}

function colorReturner(red: number, green: number, blue: number): HSColors {
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
  return {
    normal: {
      red: normalRed,
      green: normalGreen,
      blue: normalBlue,
    },
    deep: {
      red: deepRed,
      green: deepGreen,
      blue: deepBlue,
    },
    light: {
      red: lightRed,
      green: lightGreen,
      blue: lightBlue,
    },
    typo: {
      red: typoRed,
      green: typoGreen,
      blue: typoBlue,
    },
  };
}