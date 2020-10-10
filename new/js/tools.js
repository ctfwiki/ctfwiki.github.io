$(function() { 
	var current_path = window.location.href.substr(0,window.location.href.lastIndexOf('/')+1);
	$.get("http://api.readflag.cn/tools/list",function(data,status){
        $.each(data["tools_list"], function (index, item) {
			var tags = "";
			$.each(item["tags"], function (index, t) {
				tags += '<a>'+t["name"]+'</a>';
			});
			$("#contents").append(
			'<div class="tool">'+
				'<div class="tool_title">'+
					'<a href="'+item["url"]+'">'+item["title"]+'</a>'+
				'</div><hr/>'+
				'<div class="tool_tags">'+
					tags+
				'</div>'+
				'<div class="tool_foot">'+
					'<a>'+current_path+item["url"]+'</a>'+
					'<a href="'+item["url"]+'">进入</a>'+
				'</div>'+
			'</div>');
		});
    });
}); 