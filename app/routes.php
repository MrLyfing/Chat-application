<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('index');
});

Route::group(array('prefix' => 'api'), function() {
	//Route::post('auth', 'UserController@login');
	//Route::post('new_user', 'UserController@create');
	//Route::get('auth_users' 'UserController@get_auth_user');
	
	Route::get('messages', 'MessageController@index');
	Route::post('messages', 'MessageController@store');
});

App::missing(function($exception) { 
    return View::make('index'); 
});
