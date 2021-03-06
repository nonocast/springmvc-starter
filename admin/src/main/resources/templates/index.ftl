<!doctype html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>admin</title>

    <link rel="shortcut icon" href="/public/favicon.ico">
    <link href="//cdn.muicss.com/mui-0.9.18/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="/public/style.css" rel="stylesheet">
    <#--<script src="//cdn.bootcss.com/react/15.2.1/react.min.js"></script>-->
    <script src="//cdn.bootcss.com/react/15.2.1/react.js"></script>
    <script src="//cdn.bootcss.com/react/15.2.1/react-dom.js"></script>
    <script src="//cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/classnames/2.2.5/dedupe.min.js"></script>
    <script src="//cdn.bootcss.com/moment.js/2.14.1/moment-with-locales.min.js"></script>
    <script src="//cdn.bootcss.com/Director/1.2.8/director.min.js"></script>
    <script src="//cdn.bootcss.com/axios/0.16.2/axios.min.js"></script>
</head>
<body>
<div id="react"></div>
<#--<script type="text/javascript" src="/public/script/built/bundle.js"></script>-->

<div>
    <h2>${message!}</h2>
</div>

<div>
    <form method="POST" enctype="multipart/form-data" action="/upload">
        <table>
            <tr><td>File to upload:</td><td><input type="file" name="file" multiple /></td></tr>
            <tr><td></td><td><input type="submit" value="Upload" /></td></tr>
        </table>
    </form>
</div>

<div>
    <ul>
        <#list files![] as each>
            <li><a href="${each.file}">${each.file}</a></li>
        </#list>
    </ul>
</div>

</body>
</html>

