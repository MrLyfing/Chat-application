<?php

class UserController extends \BaseController {

	public function login() 
	{
		$credentials = array(
			'username' => Input::get('username'),
			'password' => Input::get('password')
		);

		$is_connected = DB::table('users_auth')
							->join('users', 'users.id', '=', 'users_auth.user_id')
							->where('users.username', '=', $credentials['username'])
							->exists();

		if (!$is_connected) {
			if (Auth::attempt($credentials)) {
				App::make('UserAuthController')->create(Auth::id());
				return Response::json(Auth::user());
			}
			else 
				return Response::json(array('Error' => 'Invalid username or password'), 500);  //Error
		}
		return Response::json(array('Error' => 'Already logged in'), 400);
	}

	public function create()
	{
		$credentials = array(
			'username' => Input::get('username'),
			'password' => Input::get('password')
		);

		$user_exists = DB::table('users')->where('users.username', '=', $credentials['username']);

		if (!$user_exists) {
			User::create($credentials);
			return Reponse::json(array('Success' => 'Create new user !'));
		}
		return Reponse::json(array('Error' => 'Username already exists !'));
	}

	public function logout()
	{
		$query = App::make('UserAuthController')->destroy(Auth::id());
		if ($query)
			return Response::json(array('Success' => 'Logged out !'));
		return Response::json(array('Error' => 'Cannot delete the user'), 500);
	}
}
