import { SCREENS_BREAKPOINTS } from "../../constants/screens";

export const getScreenSize = () => {
    const width = window.innerWidth;
    if (width < SCREENS_BREAKPOINTS.MOBILE) return 'sm';
    if (width < SCREENS_BREAKPOINTS.TABLET) return 'md';
    if (width < SCREENS_BREAKPOINTS.LAPTOP) return 'lg';
    if (width < SCREENS_BREAKPOINTS.DESKTOP) return 'xl';
    return 'xxl';
}