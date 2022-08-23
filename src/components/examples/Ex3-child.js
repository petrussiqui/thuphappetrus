
import { forwardRef, useImperativeHandle, useRef } from "react";
function Ex3Child(props,ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video ref={videoRef}
                src='https://youtu.be/-t9DbXtWihM'
                width={300}
            />
    )
}

export default forwardRef(Ex3Child)