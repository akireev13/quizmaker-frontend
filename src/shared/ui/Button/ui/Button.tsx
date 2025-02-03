import { Button, ButtonProps } from "@mui/material";

export function NormalButton({
  children,
  variant = "contained",
  ...props
}: ButtonProps) {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
}
