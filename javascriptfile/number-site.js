hamburger = document.querySelector(".hamburger");
        nav = document.querySelector("nav");
        hamburger.onclick = function() {
            nav.classList.toggle("active");
        }
     
        document.querySelector('.js-search-button')
        .addEventListener('click', () => {
        const inputElenent = document.querySelector('.js-input-button');
        const inputValue = Number(inputElenent.value);
        if (inputValue === 1){
            window.open('https://apps.apple.com/app/id6453167869')
        }else if (inputValue === 2){
            window.open('https://www.mediafire.com/file/nffujgptjlczldo/InstaPro+v10.30.apk/file')
        }else if (inputValue === 3) {
            window.open('https://media4.appsfire.co/file/youtube-gold-apk/')
        }else if (inputValue === 4){
            window.open('https://www.mediafire.com/file/mamuecuhzmti9y5/Snaptube_20231001.apk/file')
        }else if(inputValue === 5){
            window.open('https://drive.google.com/drive/folders/1X1SQpDoxv4Vs27B6M44eUuh_Z_PtCNSG')
        }

        })
