import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const menu = [
  { displayName: "Home", routeName: "/" },
  { displayName: "Services", routeName: "services" },
  { displayName: "Blogs", routeName: "blog" },
];

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  "&.active button": {
    backgroundColor: theme.palette.action.selected,
    fontWeight: theme.typography.fontWeightBold,
  },
  "&.hover button": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(["background-color", "font-weight"], {
    duration: theme.transitions.duration.short,
  }),
}));

export const NavBar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ZOAN
        </Typography>
        {menu.map((item) => (
          <StyledNavLink to={item.routeName} key={item.routeName}>
            <NavButton color="inherit">{item.displayName}</NavButton>
          </StyledNavLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};
