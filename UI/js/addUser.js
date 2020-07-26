function addUser(){
    $('#loader').removeClass('hide');
    $('#container').addClass('hide');
    let firstName= $('#firstName').val();
    let lastName= $('#lastName').val();
    let userName= $('#userName').val();
    let password= $('#password').val();
    let value= {
        firstName:firstName,
        lastName:lastName,
        userName:userName,
        password:password
    }
    let url='https://bid-backend.herokuapp.com/auth/adduser';
    let token = window.localStorage.getItem('token');
    $.ajax({
        url:url,
        type:"POST",
        data: JSON.stringify(value),
        dataType: 'json',
        contentType: "application/json",
        headers: {"Authorization": "Bearer "+token},
        success : function(data){
            console.log(data);
            $('#loader').addClass('hide');
            $('#container').removeClass('hide');
        },
        error:function(e){
            console.log('Error',e);
            $('#loader').addClass('hide');
            $('#container').removeClass('hide');
        }
        })

}
function addBidding(){
    $('#loader').removeClass('hide');
    $('#container').addClass('hide');
    let startTime= $('#startTime').val();
    let endTime= $('#endTime').val();
    let startAmount = $('#startAmount').val();
    let prePayment= $('#prePayment').val();
    let value={
        startTime:startTime,
        endTime:endTime,
        startAmount:startAmount,
        prePayment:prePayment
    }
    console.log(value);
    let url='https://bid-backend.herokuapp.com/admin/update/bidinfo';
    let token = window.localStorage.getItem('token');
    $.ajax({
        url:url,
        type:"PATCH",
        data: JSON.stringify(value),
        dataType: 'json',
        contentType: "application/json",
        headers: {"Authorization": "Bearer "+token},
        success : function(data){
            console.log(data);
            $('#loader').addClass('hide');
            $('#container').removeClass('hide');
        },
        error:function(e){
            console.log('Error',e);
            $('#loader').addClass('hide');
            $('#container').removeClass('hide');
        }
        })
    // startTime,endTime,startAmount,prePayment
    //admin/add/bidinfo
}