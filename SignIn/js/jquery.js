	$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});
		 $(document).ready(function(){
    	jQuery('button.btn.btn-outline-primary.fix-size.mt-1').click(function(){
			jQuery('.sing_in').css({display: "none"});
			jQuery('.Create_Account').css({display: "block"});
		});
    });
				 $(document).ready(function(){
    	jQuery('button.btn.btn-outline-primary.fix-size.mt-2').click(function(){
			jQuery('.Create_Account').css({display: "none"});
			jQuery('.sing_in').css({display: "block"});
		});
    });
			$(document).ready(function(){
    	jQuery('input#inlineRadio2').click(function(){
			jQuery('.yes_no_choics').css({display: "block"});
			// jQuery('.left_img img').css({height: "106vh"});
		});
    });
    $(document).ready(function(){
    	jQuery('input#inlineRadio1').click(function(){
			jQuery('.yes_no_choics').css({display: "none"});
		});
    });
    $(document).ready(function(){
    	jQuery(".form-control.login-reg").keypress(function(){
    	// if(jQuery(".form-control.login-reg").val().length === 0)
    	// {
    	// 	jQuery(".form-control.login-reg").removeClass('active');
    	// }
  		jQuery(this).addClass("active");
	});
	});	
	    $(document).ready(function(){
    	jQuery('button.btn.btn-primary.fix-size.mb-4').click(function(){
			jQuery('.login_form').css({display: "none"});
			jQuery('.book_an_appointment').css({display:"block"})
		});
    });
	    	    $(document).ready(function(){
    	jQuery('button.btn.btn-outline-light.log.out').click(function(){
			jQuery('.book_an_appointment, .login_form').css({display: "none"});
			jQuery('.login_form').css({display:"block"})
		});
    });
      // $(document).ready(function(){
        function psychiatrist_btn(){           
            $('#age1').prop('checked',true);
        }
    // });
      
     // $(document).ready(function(){
        function therapist_btn(){          
            $('#age2').prop('checked',true);
        }
    // });


