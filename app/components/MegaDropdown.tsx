"use client";

import { useState } from "react";
import {
  Menu,
  MenuItem,
  Box,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const menuData = {
  ALL: ["Phones", "Laptops", "Accessories", "Tablets"],
  "Sell Phone": ["Apple", "Samsung", "Xiaomi", "OnePlus"],
  "Sell Gadgets": ["Smart Watch", "Tablet", "Headphones", "Camera"],
  "Buy Refurbished Devices": ["Refurb Phones", "Refurb Laptops"],
  "Find New Gadgets": ["Latest Phones", "Trending Gadgets"],
  "Buy Laptop": ["MacBook", "Dell", "HP", "Lenovo"],
  "Cashify Store": ["Nearby Stores", "Offers"],
  More: ["Help Center", "Support"],
} as const;

type MenuKey = keyof typeof menuData;

export default function MegaDropdown() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>,
    menu: MenuKey
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <Box
      display="flex"
      gap={3}
      sx={{
        borderBottom: "1px solid #e5e7eb",
        px: 2,
      }}
    >
      {(Object.keys(menuData) as MenuKey[]).map((menu) => (
        <Button
          key={menu}
          onMouseEnter={(e) => handleOpen(e, menu)}
          endIcon={<KeyboardArrowDownIcon fontSize="small" />}
          sx={{
            color: "#000",
            fontWeight: 500,
            fontSize: "14px",
            textTransform: "none",
            borderRadius: 0,
            borderBottom: activeMenu === menu
              ? "2px solid #22c55e"
              : "2px solid transparent",
            "&:hover": {
              backgroundColor: "transparent",
              borderBottom: "2px solid #22c55e",
            },
          }}
        >
          {menu}
        </Button>
      ))}

      {/* MEGA DROPDOWN */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(activeMenu)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          sx: {
            // width: "100%",
            maxWidth: 1400,
            mt: 1,
            px: 3,
            py: 2,
          },
        }}
      >
        <Grid container spacing={6}>
          {activeMenu &&
            menuData[activeMenu].map((item) => (
            //   <Grid xs={3} key={item}>
                <MenuItem sx={{ py: 1 }}>
                  <Typography fontSize="14px">
                    {item}
                  </Typography>
                </MenuItem>
            //   </Grid>
            ))}
        </Grid>
      </Menu>
    </Box>
  );
}
