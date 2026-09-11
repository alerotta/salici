import { ButtonBase } from "@mui/material"
import type { SquareName } from "../types/chess";

interface SquareProps {
    name: SquareName
    dark: boolean
    selected: boolean
    onClick: (name: SquareName) => void;
}

function Square({ name, dark, selected, onClick }: SquareProps) {
    return (
        <ButtonBase
            onClick={() => onClick(name)}
            sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                backgroundColor: selected ? dark ? "#dfff77" : "#e3ecae" : dark ? "#73bbfa" : "#cfeaff",
                borderRadius: 0,
            }}
        >
            {name}
        </ButtonBase>
    )
}

export default Square