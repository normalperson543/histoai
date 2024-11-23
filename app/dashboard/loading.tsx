import { CircularProgress } from "@mui/material";
export default function Loading() {
    return (
        //based on https://css-tricks.com/centering-css-complete-guide/
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <CircularProgress />
        </div>
    );
}