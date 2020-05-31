

function requestMethod(par1,par2,par3,callback) {


    var xhr=new XMLHttpRequest();
    // 第二部：建立与服务器的连接（找到哪个服务器取数据）
    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
    //设置头信息，告诉服务器让数据以表单的形式传递
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    // 第三步：向服务端发送请求
    xhr.send(par3);
    // 第四部：接收服务器返回数据
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            var responseData = JSON.parse(xhr.responseText);
            var str = responseData.data;
            callback(str);
        }
    }

}