function userRegistration() {
	var actionType = "userRegistration";
	var fullName = "Raj";
	var email = "manoj19916@gmail.com";
	var mobile = "9789456123";
	var gender = "male";
	var password = "hello";
	var dob = "1991/05/25";
	$.ajax({
		type: "POST",
		url: "http://localhost:81/facebook/api.php",
		data: "actionType="+actionType+"&fullName="+fullName+"&emailAddress="+email+"&mobile="+mobile+"&gender="+gender+"&password="+password+"&dob="+dob, 
		cache: false,
		beforeSend: function() {
			$('.loader').html('<i class="fa fa-spinner" aria-hidden="true"></i>').fadeIn('fast');
			},
		success: function(response) {
			var anything = JSON.parse(response);
			$('.getUsers').fadeIn(600).html(anything.status); 
      }
	});		
}