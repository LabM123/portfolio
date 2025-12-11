import { useMediaQuery } from "@mui/material";

export default function MobileComponent({ children }) {
    const isMobile = useMediaQuery('(max-width:1024px)');
    return isMobile ? children : null;
}