ONLY NUMBERS WITH DOT SIGN

	function isNumberKey(evt)
	{
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode != 46 && charCode > 31 
		&& (charCode < 48 || charCode > 57))
		return false;

	return true;
	}

INTEGER VALUE

	function isNumber(evt) 
	{
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if ((event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
	}

ONLY ALPHABETS

	function isAlpha(evt)
		{
		var keyCode = (evt.which) ? evt.which : evt.keyCode
		if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)

	return false;
	return true;
	}

JQUERY VALIDATION RULES

	<script src="js/plugins/validate/jquery.validate.min.js"></script>
	<script>
	$(document).ready(function()
		{

		$("#cred_insrt").validate(
		{
		rules: 
		{
		host_name: {
		required: true,
		minlength: 4
		},
		host_port: {
		required: true,
		email: true

		},
		host_user:{
		required:true,
		minlength:4
		},
		host_pass: {
		required: true 
		},
		coin_name:{
		required:true
		} 
		} 
	});
	});

JQUERY CHECKBOX DEPENDANCY

	$("#merchant_details").on('change',function(){
	   $("#box_det").toggle(function(){
	      var isChecked = $("#merchant_details").prop('checked');
	if(!isChecked)
	{
	     $("#box_enable_disable").removeAttr('checked');
	     $("#box_details").removeAttr('checked');

	     //$("#box_enable_disable").attr("checked", "checked");
	     //$("#box_details").attr("checked", "checked");
	}

	});
	})

PAGINATION

	$(document).ready(function(){
	$('#walletVal').DataTable({
	pageLength: 10,
	responsive: true
	});

TOOLTIP

	$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip({
	placement : 'top'
	});
	});

	//in a div or td we have to call this bellow code>> 
	<div data-toggle="tooltip" title="Not Permited">Update</div>

CANVASJSCHART

	function loadChart(dataVal,year)
	{
	$(".chartContainer").CanvasJSChart({
	title: {
	text: "Month Of -"+year
	},
	axisY: {
	title: "Income",
	includeZero: false
	},
	axisX: {
	interval: 1
	},
	data: [
	{
	type: "line", //try changing to column, area
	toolTipContent: "{label}: {y} Rupees",
	dataPoints:dataVal
	}
	]
	});
	}

$(document).ready(function(){
loadChart(<?php print_r($objMerchat->graphData(2018)); ?>,'2018');
});
   function loadGraph()
{
    var year=$("#year").val();
         $.ajax({
                   type:"post",
                   url:"graph_data.php",
                   data:"y="+year,
                   dataType:"json",
                   success:function(result){
                   loadChart(result,year);
                   }
             })
}

we have to write this bellow code in body tag>>
onchange="loadGraph()"// this code will where the year function called

<div class="chartContainer" style="height: 200px; width: 100%;"></div>


TOASTER

	$(document).ready(function() {
	     setTimeout(function() {
	     toastr.options = {
		   closeButton: true,
		   progressBar: true,
		   showMethod: 'slideDown',
		   timeOut: 4000
		};
	toastr.success('Welcome to Admin PayCrypt');

	}, 1300);

	});

LIVE CLOCK

	function display_c(){
	var refresh=1000; // Refresh rate in milli seconds
	mytime=setTimeout('display_ct()',refresh)

	}

	function display_ct() 
	{
	var x = new Date();
	var a = x.toDateString();
	var b = x.getHours();
	var c = x.getMinutes();
	var d = x.getSeconds();

	document.getElementById('ct').innerHTML = a + " " + b + ":" + c+ ":" + d;
	document.getElementById('ct').style.color="white";

	tt=display_c();
	}

PREVANT COPY,PAST,CUT

	$(document).ready(function() {
	$('#feedCaptchaDiv').bind('copy paste cut',function(e) {
	e.preventDefault(); //disable cut,copy,paste

	});
	});

NO ONLY SPACE

	jQuery.validator.addMethod("noSpace", function(value, element) { 
	return value == '' || value.trim().length != 0; 
	}, "No space please and don't leave it empty");

NOT EQUELTO

	jQuery.validator.addMethod("notEqual", function(value, element, param) {
	return this.optional(element) || value != $(param).val();
	}, "This has to be different...");

EMAIL VALIDATE

	jQuery.validator.addMethod("emailnew", function(value, element) {
	return this.optional(element) || /^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/i.test(value);
	}, "Please enter valid email address");

LIMIT AFTER DECIMAL

	﻿function isNumberKey(evt,element) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57)
	&& !(charCode == 46 || charCode == 8))
	return false;
	else {
	var len = $(element).val().length;
	var index = $(element).val().indexOf('.');
	if (index > 0 && charCode == 46) {
	return false;
	}
	if (index > 0) {
	var CharAfterdot = (len + 1) - index;
	if (CharAfterdot > 9) {
	return false;
	}
	}

	}
	return true;
	}

RADIO BUTTON VALIDATION-ONCLICK EVENT

	function radioValidation(){

	var radio = document.getElementsByName('radio');
	var genValue = false;

	for(var i=0; i<radio.length;i++){
	    if(radio[i].checked == true){
	    genValue = true; 
	    }
	}
	    if(!genValue){
		var msg = '<span style="color:red;">You must select 1 from the above!</span><br /><br />';
		    document.getElementById('msg').innerHTML = msg;
		        return false;
		}

	}

RADIO BUTTON VALIDATION-BY ID

	jQuery(function(){
	     $("#subbtn").click(function(){
		var isChecked = jQuery("input[name=chest]:checked").val();
		    if(!isChecked){
		        var msg = '<span style="color:red;">You must select 1 from the above!</span><br /><br />';
		            document.getElementById('msg').innerHTML = msg;
		            return false;

		                }
	    });
	});

	function reset()
	{
	document.getElementById('msg').innerHTML = '';
	}
