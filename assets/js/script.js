$(document).ready(function() {
	$("#questionaire2").hide();
	$(".result").hide();
	$("#add-form").hide();

	$(".oily-option").click(function() {
		console.log("!!!!1->2");
 		$("#questionaire1").hide();
		$("#questionaire2").show();
	});
	$("#back-arrow").click(function() {
		console.log("!!!!back button");
 		$("#questionaire2").hide();
 		$("#questionaire1").show();
	});
	$(".wash-option").click(function() {
		console.log("!!!!2->result");
		$("#questionaire2").hide();
		$(".result").show();
	});
	$("#routine-button1").click(function(){
		console.log("routine button");
		$("#routine-button1").hide();
        $("#add-form").slideDown();
    });
});