import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import { Box, IconButton, useTheme } from "@mui/material";
import {
    LightModeOutlined,
    DarkModeOutlined,
    NotificationsOutlined,
    PersonOutlined,
    Search,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { ColorModeContext, tokens } from "../../theme";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search Bar */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
                <IconButton>
                    <Search />
                </IconButton>
            </Box>
            {/* Icon section */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined />
                    ) : (
                        <LightModeOutlined />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlined />
                </IconButton>
                <IconButton></IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
