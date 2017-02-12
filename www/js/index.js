$( document ).ready(function() {



    // window.sLat= 11.000092;
    // window.sLng = 75.993647;
    // window.dLat;
    // window.dLng;




    function barCodeScannerCall() {
        cordova.plugins.barcodeScanner.scan(function (result) {
          
                var xml = $.parseXML(result.text);
                var gender;

                if($(xml).find('PrintLetterBarcodeData').attr('gender') == 'M')
                    gender = 'Male';
                else if($(xml).find('PrintLetterBarcodeData').attr('gender') == 'F')
                    gender = 'Female';
                else
                    gender = 'Transgender';

                $('#scanAdhaarNum').html($(xml).find('PrintLetterBarcodeData').attr('uid'));
                $('#scanName').html($(xml).find('PrintLetterBarcodeData').attr('name'));
                $('#scanGender').html(gender);
                $('#scanHouse').html($(xml).find('PrintLetterBarcodeData').attr('house'));
                $('#scanPlace').html($(xml).find('PrintLetterBarcodeData').attr('lm'));
                $('#scanPO').html($(xml).find('PrintLetterBarcodeData').attr('po'));
                $('#scanDist').html($(xml).find('PrintLetterBarcodeData').attr('dist'));
                $('#scanState').html($(xml).find('PrintLetterBarcodeData').attr('state'));
                $('#scanPin').html($(xml).find('PrintLetterBarcodeData').attr('pc'));
                $('#scanDOB').html($(xml).find('PrintLetterBarcodeData').attr('yob'));
            },
            function (error) {
                alert("Scanning failed: " + error);
            },
            {
              "preferFrontCamera" : false,
              "showFlipCameraButton" : true,
              "showTorchButton" : true,
              "disableAnimations" : true,
              "prompt" : "Place your Aadhar card inside the scan area",
              "formats" : "QR_CODE,PDF_417",
              "orientation" : "portrait"
            }
        );
    }

    $('.regBody').height($(document).height() - 40);
    $('#loader').height($(document).height());
    $('#logIn').fadeIn(500);
    $('#SignUpPage').click(function () {
    	$('#logIn').fadeOut(500);
    	$('#signUp').fadeIn(500);
        barCodeScannerCall();  
    });
    $('#cancelBut').click(function () {
        barCodeScannerCall();
    });
    $('#forgotPass').click(function () {
        // barCodeScannerCall();
        $('#logIn').fadeOut(500);
        $('#forgotPassPage').fadeIn(500);
    });
    $('#cancelButForgt').click(function () {
        $('#forgotPassPage').fadeOut(500);
        $('#logIn').fadeIn(500);
    })
    $('#confirm').click(function() {
        $('.barScanResult-Wrapper').fadeOut(500);
        $('.furtherReg-Wrapper').fadeIn(500);
    });
    $('#backButReg').click(function() {
        $('.furtherReg-Wrapper').fadeOut(500);
        $('.barScanResult-Wrapper').fadeIn(500);
    });
    $('#SignPageText').click(function () {
    	$('#signUp').fadeOut(500);
    	$('#logIn').fadeIn(500);
    });
    $('.signInUpButton').click(function () {
        $('#logIn').fadeOut(500);
        $('#loader').fadeIn(500);
    });    
    $('#Desc').width($('#noOfUnit').width());
    $('.priorityBar').width(5);
    $('.caseDetWrap').width($('.caseDetails').width() - 15);
    $('.priorityBar').height($('.caseDetails').height());
    $('#map_canvas').height($(document).height() - 90);
    $('#map_canvas').width($(document).width());
});