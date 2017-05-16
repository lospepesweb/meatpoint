
$(document).ready(function(){
	
	$(".form-contacto").bind("submit",function(){
		
		$.ajax({
		type:$(this).attr("method"),
		url:$(this).attr("action"),
		data:$(this).serialize(),
		beforeSend:function(){  
            $('#enviando').css("display", "block");
            },
        complete:function(){
        	$('#enviando').css("display", "none");
        	},
       	success: function(){
       		/*swal({
  				title: "Formulario enviado:",
  				text: "En breve nos pondremos en contacto con vos.",
  				imageUrl: "thumbs-up.jpg"
			   });*/
			swal({
  				title: '<span class="informa_titulo">¡FORMULARIO ENVIADO!</span>',
  				imageUrl: 'img/sobre.png',
  				imageWidth: 250,
  				imageHeight: 222,
  				html: $('<div>')
    				.addClass('informa_texto')
    				.text('EN BREVE OBTENDRÁS RESPUESTA.'),
  				animation: false,
  				customClass: 'animated2 tada',
  				buttonsStyling: false,
  				confirmButtonClass: 'boton_confirma'
				});
			
			$('#nombreApellido').val('');
			$('#edad').val('');
			$('#telefono').val('');
      $('#mail').val('');
      $('#tipoEvento').val('');
      $('#locEvento').val('');
      $('#numInvitados').val('');
      $('#ocultar').val('');
      $('#consulta').val('');
			}
		});

		return false
	});
});