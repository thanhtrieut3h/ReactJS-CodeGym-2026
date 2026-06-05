import PropTypes from "prop-types";
import { Button } from "./Button";
export function Toolbar({ onPlayMovie, onUploadImage }){
    return (
        <>
            <Button onClick={onPlayMovie}>Play Moview</Button>
            <Button onClick={onUploadImage}>Upload Image</Button>
        </>
    )
}
Toolbar.propTypes = {
    // quy dinh kieu du lieu cho props
    onPlayMovie: PropTypes.func.isRequired,
    onUploadImage: PropTypes.func.isRequired
}