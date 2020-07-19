$(function() {
	$('#estate-checkbox-flat').click(estateFlat);
	$('#estate-checkbox-per').click(estatePer);
	$('#six-checkbox-flat').click(sixFlat);
	$('#six-checkbox-per').click(sixPer);
	$('#7-checkbox-flat').click(sevenFlat);
	$('#7-checkbox-per').click(sevenPer);
	$('#8-checkbox-flat').click(eightFlat);
	$('#8-checkbox-per').click(eightPer);
	$('#9-checkbox-flat').click(nineFlat);
	$('#9-checkbox-per').click(ninePer);
	$('#14-checkbox-flat').click(fourteenFlat);
	$('#14-checkbox-per').click(fourteenPer);
	$('#16-checkbox-flat').click(sixteenFlat);
	$('#16-checkbox-per').click(sixteenPer);
});

function estateFlat() {
	$('#estate-text-flat').prop('disabled', false);
	$('#estate-text-per').val('');
	$('#estate-text-per').prop('disabled', true);
	$('#estate-checkbox-per').prop('checked', false);
}

function estatePer() {
	$('#estate-text-flat').val('');
	$('#estate-text-flat').prop('disabled', true);
	$('#estate-text-per').prop('disabled', false);
	$('#estate-checkbox-flat').prop('checked', false);
}

function sixFlat() {
	$('#six-text-flat').prop('disabled', false);
	$('#six-text-per').val('');
	$('#six-text-per').prop('disabled', true);
	$('#six-checkbox-per').prop('checked', false);
}

function sixPer() {
	$('#six-text-flat').val('');
	$('#six-text-flat').prop('disabled', true);
	$('#six-text-per').prop('disabled', false);
	$('#six-checkbox-flat').prop('checked', false);
}

function sevenFlat() {
	$('#7-text-flat').prop('disabled', false);
	$('#7-text-per').val('');
	$('#7-text-per').prop('disabled', true);
	$('#7-checkbox-per').prop('checked', false);
}

function sevenPer() {
	$('#7-text-flat').val('');
	$('#7-text-flat').prop('disabled', true);
	$('#7-text-per').prop('disabled', false);
	$('#7-checkbox-flat').prop('checked', false);
}

function eightFlat() {
	$('#8-text-flat').prop('disabled', false);
	$('#8-text-per').val('');
	$('#8-text-per').prop('disabled', true);
	$('#8-checkbox-per').prop('checked', false);
}

function eightPer() {
	$('#8-text-flat').val('');
	$('#8-text-flat').prop('disabled', true);
	$('#8-text-per').prop('disabled', false);
	$('#8-checkbox-flat').prop('checked', false);
}

function nineFlat() {
	$('#9-text-flat').prop('disabled', false);
	$('#9-text-per').val('');
	$('#9-text-per').prop('disabled', true);
	$('#9-checkbox-per').prop('checked', false);
}

function ninePer() {
	$('#9-text-flat').val('');
	$('#9-text-flat').prop('disabled', true);
	$('#9-text-per').prop('disabled', false);
	$('#9-checkbox-flat').prop('checked', false);
}

function fourteenFlat() {
	$('#14-text-flat').prop('disabled', false);
	$('#14-text-per').val('');
	$('#14-text-per').prop('disabled', true);
	$('#14-checkbox-per').prop('checked', false);
}

function fourteenPer() {
	$('#14-text-flat').val('');
	$('#14-text-flat').prop('disabled', true);
	$('#14-text-per').prop('disabled', false);
	$('#14-checkbox-flat').prop('checked', false);
}

function sixteenFlat() {
	$('#16-text-flat').prop('disabled', false);
	$('#16-text-per').val('');
	$('#16-text-per').prop('disabled', true);
	$('#16-checkbox-per').prop('checked', false);
}

function sixteenPer() {
	$('#16-text-flat').val('');
	$('#16-text-flat').prop('disabled', true);
	$('#16-text-per').prop('disabled', false);
	$('#16-checkbox-flat').prop('checked', false);
}
