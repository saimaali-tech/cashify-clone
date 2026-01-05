"use client";
import { Box, Button, Popover, Typography } from "@mui/material";
import { useState } from "react";

export default function MegaMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      {/* Trigger */}
      <Button
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        sx={{ color: "black", textTransform: "none" }}
      >
        Sell Phone
      </Button>

      {/* Mega Menu */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          onMouseLeave: () => setAnchorEl(null),
          sx: { p: 3, width: 360 },
        }}
      >
        <Typography fontWeight="bold">Top Brands</Typography>
        <Typography>Apple</Typography>
        <Typography>Samsung</Typography>
        <Typography>Xiaomi</Typography>

        <Box mt={2}>
          <Typography fontWeight="bold">Top Selling</Typography>
          <Typography>iPhone 12</Typography>
          <Typography>Galaxy Note 20</Typography>
        </Box>
      </Popover>
    </>
  );
}
