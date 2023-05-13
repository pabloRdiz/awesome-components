import { Theme } from '@react-navigation/native';
type ThemeAction =
  | {
      type: 'set_light_theme';
    }
  | { type: 'set_dark_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividirColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividirColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividirColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'pink',
    text: 'white',
    border: 'coral',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme };
    case 'set_dark_theme':
      return { ...darkTheme };
    default:
      return state;
  }
};
