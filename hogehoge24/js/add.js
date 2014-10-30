// ダイアログ機能を適用
function popup_dialog(popup) {
	var screenW = window.innerWidth;
	var popupW = '55%';
	var popupH = 480;
	if (screenW <= 770) {
		popupW = '95%';
		popupH = 500;
	}
	$(".popup"+ popup).dialog({
		autoOpen: false,
		height: popupH,
		width: popupW,
		resizable: false,
		title: '先輩社員紹介',
		closeOnEscape: false,
		modal: true,
		buttons: {
			"　×　": function() {
				$(this).dialog("close");
			}
		}
	})
	.prev(".ui-dialog-titlebar")
	.css("background","#99CCFF")
	.css("border","#99CCFF")
	.css("height", "25px")
	
	$(".popup"+ popup).dialog("open");
}

// ダイアログ外をクリックするとダイアログを閉じる処理
$(document).on("click", ".ui-widget-overlay", function() {
	$(this).prev().find(".ui-dialog-content").dialog("close");
});
	
}