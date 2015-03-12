<?php

class UserController extends \BaseController {

	public function login() 
	{
		if (Auth::attempt(array('username' => Input::get('username'), 'password' => Input::get('password')))) {
			App::make('User_authController')->create(Auth::id());
			return Response::json(Auth::user());
		}
		else 
			return Response::json(array('Error' => 'Invalid username or password'), 500);  //Error
	}

	public function logout()
	{
		App::make('User_authController')->delete(Auth::id());
		return Response::json(array('Success' => 'true'));
	}
}
