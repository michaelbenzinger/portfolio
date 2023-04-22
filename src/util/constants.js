import { createClamp } from "./functions";

export const maxWidth = 1200;
export const sidePadding = createClamp(30, 60, 600, maxWidth);
export const letterSpacingS = `letter-spacing: -0.05em`;
export const letterSpacingM = `letter-spacing: -0.03em`;
export const letterSpacingL = `letter-spacing: -0.01em`;
export const transitionAll = `transition: all 0.2s`;