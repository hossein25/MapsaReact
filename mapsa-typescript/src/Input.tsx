import { TextField, TextFieldProps } from "@material-ui/core";
import { FC } from "react";

type InputProps = TextFieldProps & {};

export const Input: FC<InputProps> = props => {
    const { variant = 'outlined', size, ...restProps } = props
    return <TextField variant={variant} size={size} {...restProps} />
}