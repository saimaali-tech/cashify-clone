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

const menuData: Record<string, string[]> = {
  ALL: ["Phones", "Laptops", "Accessories", "Tablets"],
  "Sell Phone": ["Apple", "Samsung", "Xiaomi", "OnePlus"],
  "Sell Gadgets": ["Smart Watch", "Tablet", "Headphones", "Camera"],
  "Buy Refurbished Devices": ["Refurb Phones", "Refurb Laptops"],
  "Find New Gadgets": ["Latest Phones", "Trending Gadgets"],
  "Buy Laptops": ["MacBook", "Dell", "HP", "Lenovo"],
  "Cashify Store": ["Nearby Stores", "Offers"],
  More: ["Help Center", "Support"],
};


export default function MegaDropdown() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string>("");

  const handleOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu("");
  };

  return (
    <Box display="flex" gap={2}>
      {Object.keys(menuData).map((menu) => (
        <Box key={menu}>
          <Button
            onMouseEnter={(e) => handleOpen(e, menu)}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "#fff",
              textTransform: "none",
              fontSize: "0.9rem",
            }}
          >
            {menu}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={activeMenu === menu}
            onClose={handleClose}
            MenuListProps={{
              onMouseLeave: handleClose,
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            PaperProps={{
              sx: {
                width: 600,
                padding: 2,
              },
            }}
          >
            <Grid container spacing={2}>
              {menuData[menu].map((item) => (
                <Grid item xs={3} key={item}>
                  <MenuItem onClick={handleClose}>
                    <Typography fontSize="0.85rem">
                      {item}
                    </Typography>
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Menu>
        </Box>
      ))}
    </Box>
  );
}
