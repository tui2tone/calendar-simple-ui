$(function(){ //DOM Ready

	// var serialization = []
	// for(var i = 1; i < 2; i++) {
	// 	for(var j = 1; j < 2; j++) {
	// 		serialization.push({ col: i, row: j, size_x: 1, size_y: 1 });
	// 	}
	// }

 //  var gridster = $(".gridster ul").gridster({
 //      widget_margins: [0, 0],
 //      widget_base_dimensions: [70, 60],
 //      resize: {
 //        enabled: true
 //      }
 //  }).data('gridster');

 //  $.each(serialization, function () {
 //     gridster.add_widget('<li />', this.size_x, this.size_y, this.col, this.row);
 //  });

  var options = {
      cellHeight: 60,
      verticalMargin: 0,
      width: 35,
      float: true
  };
  $('.grid-stack').gridstack(options);

  for(var i = 1; i < 6; i++) {
    for(var j = 1; j < 8; j++) {

      (function() {
        var x = i;
        var y = j;
        $(".week-" + x + " .day" + y).bind("click", function() {
          var grid = $('.grid-stack').data('gridstack');
          grid.addWidget('<div class="grid-stack-item"><div class="grid-stack-item-content"><input type="text"></div></div>', ((x-1) * 7) + (y-1), 0, 2, 1, false);
        });
      })();
    }
  }

});
