(function main() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    var contentHello = $("#type-hello-1");
    var contentCmsn = $(".hpbd_content");
    var contentCountDown = $(".countdown_content");
    var hpbdGif = $(".hpbd-gif");
    var tanghoaGif = $(".tanghoa")
    const audio_bd = $("#audio_bd");
    const audio_hpbd = $("#audio_hpbd");
    audio_bd.src = "asset/audio/daodau.mp3"
    audio_hpbd.src = "asset/audio/hpbd.mp3"

    var showFace = $(".back-ground");
    
    

    // btn click me
    var btnHello = $(".btn-hello");

    btnHello.onclick = function () {
        // typewriter();
        genTextHello();
        btnHello.style.display = "none";
        audio_bd.play();
    }

    //btn-letter
    var btnLetter = $(".btn-letter");
    function handleRotate(btnLetter) {

        const btnLetterAnimate = btnLetter.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 5000, //10s
            iterations: Infinity
        });
    }

    btnLetter.onclick = function () {
        btnLetter.style.display = "none";
        tanghoaGif.style.display = 'none';
        contentHello.style.display = "none";
        hpbdGif.style.display = "block";
        audio_bd.pause();
        audio_hpbd.play();
        genTextCmsn();

    }

    function genTextHello() {
        // text
        var aText = new Array(
            "Hello, Có lá thư được gửi đến từ một người giấu tên!", 
            "Nếu bạn là Quỳnh xinh đẹp tuyệt trần thì hãy nhận nó nhé ^^"
        );
    
        var iSpeed = 100; // time delay of print out
        var iIndex = 0; // start printing array at this posision
        var iArrLength = aText[0].length; // the length of the text array
        var iScrollAt = 20; // start scrolling up at this many lines
            
        var iTextPos = 0; // initialise text position
        var sContents = ''; // initialise contents variable
        var iRow; // initialise current row
        var insertText =  "...";

        
        function typewriter() {
            sContents =  ' ';
            iRow = Math.max(0, iIndex-iScrollAt);
            
            while ( iRow < iIndex ) {
                sContents += aText[iRow++] + '<br />';
            }
    
            if (iTextPos + 1 == iArrLength && iIndex + 1 != aText.length) {
                insertText = '';
            }
    
            contentHello.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + insertText;
    
            
            if ( iTextPos++ == iArrLength ) {
                iTextPos = 0;
                iIndex++;
                if ( iIndex != aText.length ) {
                    iArrLength = aText[iIndex].length;
                    setTimeout(typewriter, 500);
                } else {
                    btnLetter.style.display = "block";
                    tanghoaGif.style.display = 'flex';

                    
                    handleRotate(btnLetter);
                }
            } else {
                setTimeout(typewriter, iSpeed);
            }
        }

        typewriter();

    }


    function genTextCmsn() {
        // text
        var aText = new Array(
            "Chúc mừng sinh nhật, chúc em sinh nhật thật nhiều niềm vui!",
            "Sau này còn cả hành trình dài, chúc cho em chân cứng đá mềm, mọi nỗ lực đều có kết quả.",
           "Chúc cho em sức khoẻ để đương đầu với khó khăn, gia đình yên ấm, một đời bình an. Thương em!",
           "Còn bây giờ bật mí người gửi thư nè ~"
        );
    
        var iSpeed = 100; // time delay of print out
        var iIndex = 0; // start printing array at this posision
        var iArrLength = aText[0].length; // the length of the text array
        var iScrollAt = 20; // start scrolling up at this many lines
            
        var iTextPos = 0; // initialise text position
        var sContents = ''; // initialise contents variable
        var iRow; // initialise current row
        var insertText =  "...";

        
        function typewriter2() {
            sContents =  ' ';
            iRow = Math.max(0, iIndex-iScrollAt);
            
            while ( iRow < iIndex ) {
                sContents += aText[iRow++] + '<br />';
            }
    
            if (iTextPos + 1 == iArrLength && iIndex + 1 == aText.length) {
                insertText = '';
            }
    
            contentCmsn.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + insertText;
    
            
            if ( iTextPos++ == iArrLength ) {
                iTextPos = 0; 
                iIndex++;
                if ( iIndex != aText.length ) {
                    iArrLength = aText[iIndex].length;
                    setTimeout(typewriter2, 500);
                } else {

                    contentCmsn.style.display = 'none';
                    contentCountDown.style.display = 'flex';

                    contentCountDown.innerHTML = '3';
                    var num = 3;
                    var x = setInterval(function() {
                        contentCountDown.innerHTML = num;

                        if (num == 1) {
                            setTimeout(function() {
                                contentCountDown.style.display = 'none';
                                hpbdGif.style.display = 'none';
                                showFace.style.display = 'block';
                                clearInterval(x);
                            }, 1000);
                            
                        }

                        num--;
                        
                    }, 1000);
                }
            } else {
                setTimeout(typewriter2, iSpeed);
            }
        }

        typewriter2();

    }


    
   
})();