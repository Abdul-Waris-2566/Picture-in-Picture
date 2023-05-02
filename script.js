const videoElement = document.getElementById("video");
const button = document.getElementById("button");


const selectMediaStream = async function() {
    try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata() = ()=> {
        videoElement.play();

    }
    }catch (error) {
        console.log(error.message)
    }
}

button.addEventListener('click', async function() {
// Disable button
button.disabled = true;
// Wait for picture in picture
await videoElement.requestPictureInPicture();
// Reset the button back
button.disabled = false;
})


// On load
selectMediaStream()

