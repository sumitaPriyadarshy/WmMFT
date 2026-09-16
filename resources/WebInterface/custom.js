/*!
* Copyright (c) 2013-2014 Software AG, Darmstadt, Germany and/or Software AG USA Inc., Reston, VA, USA, and/or its subsidiaries and/or its affiliates and/or their licensors.
* Use, reproduction, transfer, publication or disclosure is prohibited except as specifically provided for in your License Agreement with Software AG.
*/
window.onload = rebrand;

function rebrand() {
	/* switch Header Text and Header Image */
	$('#headerText').append('ActiveTransfer Webclient');
	$('#headerText').before($('#headerImages'));

	removeAdminLink();
	$('#mainNavigation').bind('DOMSubtreeModified', removeAdminLink);
}

function removeAdminLink() {
	/* Remove Admin link */
	$("ul.topnav li:contains('Admin')").remove();
}

function validateNoOfDays () {
	$('#txtdays').removeClass("focus");
	var txtDays = $('#txtdays').val();
	var days = parseInt(originalShareDays);
	if ( Number(txtDays) > Number(maxShareDays) ) {
		alert ( $(localizations)[0].fileCannotBeSharedForMoreThanNDays + ' ' + maxShareDays + ' ' + $(localizations)[0].ShareWindowExpiresInDaysLabelText );
		$('#txtdays').prop('value', originalShareDays);
		var myDate = new Date();
		myDate.setDate(myDate.getDate() + days );
		var prettyDate = (myDate.getMonth() + 1) + '/' + myDate.getDate() + '/' + myDate.getFullYear();
		$("#txtDate", shareOptionDiv).val(prettyDate).attr("date", prettyDate);
		if (window.Shareyyyymmdd) {
			prettyDate = myDate.getFullYear() + '/' + monthNames[myDate.getMonth()] + '/' + myDate.getDate();
			$("#txtDate", shareOptionDiv).val(prettyDate);
		}
		if (window.Shareddmmyyyy) {
			var mnth = myDate.getMonth() + 1;
			prettyDate = myDate.getDate() + '/' + mnth.leftZeroPad(2) + '/' + myDate.getFullYear();
			$("#txtDate", shareOptionDiv).val(prettyDate);
		}			
		$('#txtdays').focus();
		$('#txtdays').addClass("focus");		
	}
	
	if ( Number(txtDays) == 0 ) {
		alert($(localizations)[0].fileCannotBeSharedForZeroDays);
		$('#txtdays').prop('value', originalShareDays);
		var myDate = new Date();
		myDate.setDate(myDate.getDate() + days );
		var prettyDate = (myDate.getMonth() + 1) + '/' + myDate.getDate() + '/' + myDate.getFullYear();
		$("#txtDate", shareOptionDiv).val(prettyDate).attr("date", prettyDate);
		if (window.Shareyyyymmdd) {
			prettyDate = myDate.getFullYear() + '/' + monthNames[myDate.getMonth()] + '/' + myDate.getDate();
			$("#txtDate", shareOptionDiv).val(prettyDate);
		}
		if (window.Shareddmmyyyy) {
			var mnth = myDate.getMonth() + 1;
			prettyDate = myDate.getDate() + '/' + mnth.leftZeroPad(2) + '/' + myDate.getFullYear();
			$("#txtDate", shareOptionDiv).val(prettyDate);
		}	
		$('#txtdays').focus();
		$('#txtdays').addClass("focus");
	}
};

function sharePermissionView_Check() {
	if ($('#sharePermissionsDownload').is(":checked") || $('#sharePermissionsDelete').is(":checked") || $('#sharePermissionsRename').is(":checked") || $('#sharePermissionsCreateFolder').is(":checked") || $('#sharePermissionsDeleteFolder').is(":checked")) {
		$('#sharePermissionsView').prop ('checked', true);
	}
};

function sharePermissionViewClick() {
	if ( !$('#sharePermissionsView').is(":checked")) {
		$('#sharePermissionsDownload').prop ('checked', false);
		$('#sharePermissionsDelete').prop ('checked', false);
		$('#sharePermissionsRename').prop ('checked', false);
		$('#sharePermissionsCreateFolder').prop ('checked', false);
		$('#sharePermissionsDeleteFolder').prop ('checked', false);
	} 
};


