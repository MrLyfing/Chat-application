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
	Route::post('user/login', 'UserController@login');
	Route::get('user/logout', 'UserController@logout');
	//Route::post('user/create', 'UserController@create');
	//Route::get('user/get_list' 'UserController@get_auth_user');

	Route::get('messages', 'MessageController@getLastMessages');
	Route::post('messages', 'MessageController@store');
});

App::missing(function($exception) { 
    return View::make('index'); 
});
