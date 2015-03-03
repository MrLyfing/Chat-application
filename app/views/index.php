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

	<script type="text/javascript" src="js/services/services.js"></script>
	<script type="text/javascript" src="js/controllers/public.module.js"></script>
	<script type="text/javascript" src="js/controllers/message.controller.js"></script>
</head>
<body>
	<div class="container" ng-controller="MessageCtrl" style="padding-top:20px;">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<h3 class="text-center">MY CHAT APPLICATION</h3>
				<br /><br />
				<div class="panel panel-info">

					<div class="panel-heading">
						CHAT HISTORY
					</div>

					<!--
					<div class="panel-body">
					</div>
					-->

					<ul class="list-group">
						<li class="list-group-item" ng-repeat="message in messages">{{ message.text }}</li>
					</ul>

					<div class="panel-footer">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Enter Message" ng-model="text_input"/>
							<span class="input-group-btn">
								<button class="btn btn-info" type="button" ng-click="createMessage()">SEND</button>
							</span>
						</div>
					</div>

				</div>
			</div>
			
		</div>
		
	</div>
</body>
</html>