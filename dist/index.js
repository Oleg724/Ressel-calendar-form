const uploadBtn = document.querySelector('#upload');

const changeFileName = (e) => {
    const span = document.querySelector('#upload_span');
    span.innerHTML = e.target.value.split('\\').pop();
}

uploadBtn.addEventListener('change', changeFileName);