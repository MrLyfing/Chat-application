<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
	<meta charset="UTF-8">
	<title>My chat application</title>

	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.css">

	<script src="bower_components/jquery/dist/jquery.js"></script>
	<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
	<script src="bower_components/angular/angular.js"></script>
	<script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
	<script src="bower_components/angular-local-storage/dist/angular-local-storage.js"></script>

	<script type="text/javascript" src="js/services/services.js"></script>
	<script type="text/javascript" src="js/controllers/public.module.js"></script>
	<script type="text/javascript" src="js/controllers/message.controller.js"></script>
</head>
<body>
	<div ui-view>
	</div>
</body>
</html>