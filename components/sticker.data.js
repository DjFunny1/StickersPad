const STICKERS = [
    {src: './src/assets/sticker-1.png'},
    {src: './src/assets/sticker-2.png'},
    {src: './src/assets/sticker-3.png'},
    {src: './src/assets/sticker-4.png'},
    {src: './src/assets/sticker-4.png'},
    {src: './src/assets/face1.jpg'},
    {src: './src/assets/face2.jpg'},
    {src: './src/assets/face3.jpg'},
    {src: './src/assets/face4.jpg'},
    {src: './src/assets/face5.jpg'},
    {src: './src/assets/face6.jpg'},
    {src: './src/assets/face7.jpg'},
    {src: './src/assets/face8.jpg'},
    {src: './src/assets/face9.jpg'},
    {src: './src/assets/face10.jpg'},
    {src: './src/assets/face11.jpg'},
    {src: './src/assets/face12.jpg'},
]

function sample(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]
}

export function getSticker() {
    return sample(STICKERS)
}
