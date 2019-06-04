// var myDropzone = new myDropzone("div#dropzone",{url: "/file/post"});
$(document).ready(()=>{
    $($("div#myDropzone").dropzone({ url: "/file/post" }))
    $($("img#myDropzone2").dropzone({ url: "/file/post" }))

})