function Sticker({ srcProp, posX, posY }) {
    return (
    <img
        src={srcProp}
        style={{
        position: "absolute",
        left: posX,
        top: posY,
        transform: "translate(-50%, -50%)",
        filter: "drop-shadow(4px 8px 0px hsl(300 26% 56% / .34))",
        }}
    />
    );
}

export default Sticker;