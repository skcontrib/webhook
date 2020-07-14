/*   
  Project by Zua 
  Edited by skcontrib
  https://github.com/thatziv/webhook 
  https://github.com/skcontrib
*/
$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        $.post(link, 
            {"content": content, "username": username, "avatar_url": avatar}, );
        
    });
    $("#content").keypress(function (e) {
        if(e.which == 13 && !e.shiftKey) {
            var link = $('#link').val();
            var username = $('#username').val();
            var content = $('#content').val();
            var avatar = $('#avatar').val();
            if (link==null || link=="",content==null || content=="")
            {
                alert("Please Fill Out All The Fields");
                return false;
            }
            $.post(link, {"content": content, "username": username, "avatar_url": avatar,});
            $('#content').val('');
            e.preventDefault();
        };
    });
});
