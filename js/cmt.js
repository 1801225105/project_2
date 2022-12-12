//渲染页面

$(function() {
    function load() {
        $.get("http://www.liulongbin.top:3006/api/cmtlist", function(res) {
            if (res.status !== 200) {
                alert("请求失败");
                return;
            }
            $("#cmt-list").empty();
            $.each(res.data, function(i, data) {
                $("#cmt-list").append("<li class='list-group-item'> <span class='badge' style='background-color: #F0AD4E;'>评论时间：" + data.time + "</span><span class='badge' style='background-color: #5BC0DE;'>评论人：" + data.username + "</span>" + data.content + "</li>");
            })
        })

    }

    load();

    //提交数据





    $('#formAddCmt').submit(function(e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
            if (res.status !== 201) {
                return alert('发表评论失败！')
                console.log(res);
            }
            load();
            $('#formAddCmt')[0].reset()
        })
    })
})