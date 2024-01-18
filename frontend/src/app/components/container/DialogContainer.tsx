import {ReactNode} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {PRIMARY, SECONDARY, TEXT_DARK} from "@/app/util/styleConstants";

interface DialogContainerProps {
    children: ReactNode;
    open: boolean;
    title: string;
}

export default function DialogContainer({children, open,title}: DialogContainerProps) {
    return (
        <Dialog open={open} sx={dialogStyle}>
            <DialogTitle sx={dialogTitleStyle}>{title}</DialogTitle>
            {children}
        </Dialog>
    )
}

const dialogStyle = {
    '& .MuiDialog-container': {
        '& .MuiPaper-root': {
            background: PRIMARY,
            border: `0.7rem solid ${SECONDARY}`,
            borderRadius: "2rem",
        },
    },
}

const dialogTitleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    color: TEXT_DARK,
};