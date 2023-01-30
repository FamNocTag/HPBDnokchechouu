(function mm() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const inputDate = $(".input-date");
    const btnGoto = $(".btn-goto");
    const checkContent = $(".check-content");

    const checkWrapper = $(".check-wraper");
    const btnChuyenAnh = $(".btn-chuyen");
    const contentImage = $(".content-image");
    const btnNhanGui = $(".btn-nhangui");
    const audioMm = $("#memory");
    audioMm.src = "asset/audio/memory.mp3";
    
    
    btnChuyenAnh.onclick = () => {
        // checkWrapper.style.display = 'none';
        contentImage.style.display= "flex";
        contentImage.scrollIntoView();

        handleSwing(btnNhanGui);
    }
    
    // setTimeout(function(){
    //     audioMm.play();
    // }, 2000);

    inputDate.onclick = () => {
        audioMm.play();
    }
    
    
    function checkInputValue() {
        
        const inputValue = inputDate.value;
        if (inputValue != '2021-07-10') checkContent.innerHTML = "Á à, nhớ ngày tỏ tình với đứa khác đúng không >.<"
        else  {
            checkContent.innerHTML = `Trí nhớ tốt, cho 10 đỉm`;
            btnChuyenAnh.style.display = 'block';
        }
    }
    
    btnGoto.onclick = () => {
        checkInputValue();
    }

    

    function handleSwing(btnNhanGui) {
        const btnLetterAnimate = btnNhanGui.animate([
            {transform: "translateX(-300%)"}
        ], {
            duration: 5000, //10s
            iterations: Infinity
        });
    }

    btnNhanGui.onclick = () => {
        genTextNhanGui();
    }



    const contentNhangui = $(".content-nhangui");

     function genTextNhanGui() {
        // text
        const aText =new Array( "Hey... Mình ở cạnh nhau cũng được lâu rồi ha, còn nhiều nhiều lắm những thứ mình đã cùng nhau trải qua.",
        "Từ thích đến thương...rồi yêu, ở bên nhau, chia cho nhau từ miếng ăn, giấc ngủ, cái quần cái áo.",
        " Đôi lúc nghĩ chắc ngoài em ra bản thân chưa từng khăng khít với ai đến vậy. Mình từ có những thói quen không hợp, đến từ từ hoà hợp.",
         "Rồi có những chuyện nhỏ...lắm khi lại thành vấn đề to. Có lẽ mình bên nhau cũng lắm drama ha. Nhưng tất nhiên hạnh phúc cũng nhiều.",
        " Ny luôn biết ơn cái cách mà em chăm sóc mình, ny cảm nhận được tâm tư em đặt ở đó từ những điều nhỏ nhất. Cảm ơn em \(^3^)/.",
        " Dù sau này có như thế nào đi nữa, cả hai cũng đã có những thứ đẹp đẽ thế này, nhỉ. Xin lỗi em nhiều nha...chẳng dành nhiều thời gian cho em.",
         "Cái này cũng làm không được đẹp, thứ lỗi cho ny nha! Em bảo không được ny viết thư tay cho, nhưng mà viết thư như này cho lạ, hehe.",
         "Lần nữa chúc em sinh nhật vui vẻ và ngủ ngoannnn!!!")
    
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
    
            contentNhangui.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + insertText;
    
            
            if ( iTextPos++ == iArrLength ) {
                iTextPos = 0;
                iIndex++;
                if ( iIndex != aText.length ) {
                    iArrLength = aText[iIndex].length;
                    setTimeout(typewriter2, 500);
                } else {

                    
                }
            } else {
                setTimeout(typewriter2, iSpeed);
            }
        }

        typewriter2();

    }


    
    
    

})();

