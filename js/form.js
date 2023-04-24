//CONFIRMACION DE DATOS FORMULARIO

$("#formulario").validate({
    rules: {
        name: {
            required: true,
            rangelength: [3,15]
        },

        subname: {
            required: true,
            rangelength: [3,15]
        },

        email: {
            required: true,
            email: true,
            rangelength: [3,30]
        },

        password: {
            required: true,
            rangelength: [3,20]
        },
    }
});

$("#boton").click(function(){
    if($("formulario").valid()== false){
        return;
    }

    let name = $("#name").val()
    let subname = $("#subname").val()
    let email = $("#email").val()
    let password = $("#password").val()

});
