import { TextField } from "@material-ui/core";

export const Input1 = props => {
    const { variant = 'outlined', size, ...restProps } = props

    const user = {name: "ali"};
    const {name = "vahid"} = user;
    console.log({name});

    return <TextField variant={variant} size={size} {...restProps} />
}