const filePickerElement = document.getElementById('image');
const previewImageElement = document.getElementById('image-preview')

function showImagePreview() {
    const files = filePickerElement.files;

    if (!files || files.length === 0) {
        previewImageElement.style.display = 'none'
        return;
    }
    const pickedFile = files[0]

    previewImageElement.src = URL.createObjectURL(pickedFile)
    previewImageElement.style.display = 'block'
}


filePickerElement.addEventListener('change', showImagePreview) 