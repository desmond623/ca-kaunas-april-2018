function euroConverter(){
    document.converter.dollar.value = document.converter.euro.value * 1.470
    document.converter.pound.value = document.converter.euro.value * 0.717
    }
    function dollarConverter(){
    document.converter.euro.value = document.converter.dollar.value * 0.680
    document.converter.pound.value = document.converter.dollar.value * 0.488
    }
    function poundConverter(){
    document.converter.dollar.value = document.converter.pound.value * 2.049
    document.converter.euro.value = document.converter.pound.value * 1.394
    }
    
    