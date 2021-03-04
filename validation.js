function required(elementid){
    let ev = $(elementid).val();
    if(ev == null || ev == '' | ev == 'undefined')
    {
       event.preventDefault();
       removevalidation(elementid);
       $(elementid).after("<div style=color:red>This Field is Required</div>");
       $(elementid).focus();
       return false;
    }
    else{
      removevalidation(elementid);
       return true;
    }
    }
    
    function removevalidation(elementid){
      let ev = $(elementid).val();
      if(ev != null || ev != '' | ev != 'undefined')
    {
      $(elementid).next("div").remove();
    }
    }

    function required1(elementid){
        alert("fun");
        let ev = $(elementid).val();
        if(ev == null || ev == '' | ev == 'undefined')
        {
            event.preventDefault();
            $('#err1').show();
            $('#err1').html("This field is Required ");
            $('#err1').focus();
            $('#err1').css("color","red");
            return false;
        }
       
        else{
            $('#err1').hide();
            return true;
        }
      }