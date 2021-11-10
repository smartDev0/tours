export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export type ThemeModeType = ThemeMode.Light | ThemeMode.Dark;

const baseTheme: { [property: string]: any } = {};
const t = baseTheme;

t.fontFamily = `"Poppins", sans-serif`;
t.gradientAccentColor = "linear-gradient(60deg, #3b9eff, #53dbff)";
t.gradientDarkColor = "linear-gradient(60deg, #05305F, #02519F)";
t.invertedGradientAccentColor = "linear-gradient(60deg, #53dbff, #3b9eff)";
t.gradientGreenColor = "linear-gradient(60deg, #7cb342, #a3cd77)";
t.accentColor = "#2fb6fa";
t.accentLighten80Color = "#d5f0fe";
t.accentLighten90Color = "#eaf7fe";
t.accentDarkenColor = "#09aeff";
t.accentDarken60Color = "#024e74";
t.greenColor = "#12bf7c";
t.greenDarkenColor = "#10b173";
t.yellowColor = "#ffb300";
t.yellowDarkenColor = "#ffa800";
t.redErrorColor = "#ff4d4f";
t.baseColor = "#797687";
t.baseLighten75Color = "#ecebee";
t.baseLighten85Color = "#eaeaed";
t.baseLighten95Color = "#f8f8f9";
t.baseLightColor = "#b5b3be";
t.baseLightColorTransparent = "rgba(181, 179, 190, 0.7)";
t.titleColor = "#1a222c";
t.footerColor = "#1a222c";

t.borderRadius = "7px";

export const theme: { [property: string]: any } = {
  ...baseTheme,
  mode: ThemeMode.Light,
  name: "Light",
};
