<?php

class UserController extends \BaseController {

	public function login() 
	{
		if (!Auth::check()) {
			if (Auth::attempt(array('username' => Input::get('username'), 'password' => Input::get('password')), true))
				return Response::json(Auth::user());
			else 
				return Response::json(array('Error' => 'Invalid username or password'), 500);  //Error
		}
		else
			return Response::json(array('Error' => "Already logged in", 400));
	}

	public function logout()
	{
		if (Auth::check()) {
			Auth::logout();
			return Response::json(array('success' => true));
		}
		return Response::json(array('success' => false), 500); //Error
	}

	public function get_auth_user() //Get the list of auth users
	{
		
		
	}
}
