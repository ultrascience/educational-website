// function that conver img to base64 using arrayBufferToBase64
function imageConverter64(img: any) {
    const base64Flag = 'data:image/jpeg;base64,';
    const imageStr = arrayBufferToBase64(img.data);
    return base64Flag + imageStr;
}

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

export {imageConverter64};
