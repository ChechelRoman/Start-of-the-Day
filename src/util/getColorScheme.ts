const dayStates = [
  ['late_night', 3, 4, 5 , 6, 7],
  ['morning', 7, 8, 9, 10, 11, 12],
  ['mid_day', 13, 14, 15, 16, 17],
  ['evening', 18, 19, 20, 21],
  ['early_night', 22, 23, 0, 1, 2],
];

const colorSchemes = [
  {
    state: 'late_night',
    background_main: 'rgb(102,150,186)',
    background_secondary: 'rgb(200, 222, 239)',
    text_primary: 'rgb(42, 96, 137)',
    text_header: 'rgb(148, 186, 216)',
    text_info: 'rgb(67, 118, 157)',
  },
  {
    state: 'morning',
    background_main: 'rgb(226, 227, 139)',
    background_secondary: 'rgb(254, 255, 215)',
    text_primary: 'rgb(0, 0, 0)',
    text_header: 'rgb(161, 162, 56)',
    text_info: 'rgb(72, 73, 0)',
  },
  {
    state: 'mid_day',
    background_main: 'rgb(231, 165, 83)',
    background_secondary: 'rgb(255, 211, 157)',
    text_primary: 'rgb(57, 46, 32)',
    text_header: 'rgb(176, 110, 28)',
    text_info: 'rgb(79, 44, 0)',
  },
  {
    state: 'evening',
    background_main: 'rgb(126, 75, 104)',
    background_secondary: 'rgb(180, 141, 163)',
    text_primary: 'rgb(8, 6, 7)',
    text_header: 'rgb(85, 30, 61)',
    text_info: 'rgb(39, 0, 22)',
  },
  {
    state: 'early_night',
    background_main: 'rgb(41, 41, 101)',
    background_secondary: 'rgb(77, 77, 136)',
    text_primary: 'rgb(14, 14, 29)',
    text_header: 'rgb(13, 13, 61)',
    text_info: 'rgb(2, 2, 28)',
  }
];

export type ColorScheme = {
  state: string;
  background_main: string;
  background_secondary: string;
  text_primary: string;
  text_header: string;
  text_info: string;
};


export const getColorScheme = (date: Date) => {
  if (date !== undefined) {
    const hours = date.getHours();
    const dayState = dayStates.filter((arr) => arr.includes(hours)).flat()[0];
    const colorSchema = colorSchemes.filter((obj) => obj.state === dayState)[0];
    return colorSchema;
  }
};
