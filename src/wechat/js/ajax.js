$(function() {
     $("#selectBtn").bind('click',function(){
    	    var res=$("#playerName").val().trim();
    	    if(res==null || res==""){
    	        alert("请输入召唤师ID");
    	    } else{
    	    formSubmit();
    	    $("#result").show();
    	    }
     });
});


function formSubmit(){
    $.ajax({
         type: "POST",
         dataType:"json",
         url: "/hiddenPointController.do",
         data : {
                  'serverId' : $("#serverId").val(),
                  'serverName':$("#serverName").val(),
                  'playerName':$("#playerName").val()
          },
        async : true,
        success: function (data) {
            $.each(data, function(index, element) {
                var  players = data.results;
                for(var i=0;i<players.length;i++){
              	  var player = players[i];
              	  $("#arr0").html(player.name);
              	  $("#arr1").html(player.tier);
              	  $("#arr2").html(player.score);
              	  $("#arr3").html(player.times);
              	  $("#arr4").html(player.point);
              	  $("#arr5").html("超越"+player.over+"%的玩家");
                }
              });
        	
         },
         error: function(data) {
             alert("error:"+data.responseText);
          }
     });
};