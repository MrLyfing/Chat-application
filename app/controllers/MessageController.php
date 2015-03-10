<?php

class MessageController extends \BaseController {

	public function index()
	{
		$all = DB::table('messages')->get();
		return Response::json($all);
	}

	public function store()
	{
		Message::create(array(
			'user_id' =>  Auth::id(),
			'text' => Input::get('text'),
			'sender' => Input::get('sender')
		));

		$response = array(
			'success' => true
		);
		return Response::json($response);
	}

	public function getLastMessages() //return the last messages
	{
		$query = DB::table('messages')->orderBy('created_at', 'DESC')->take(8)->get();
		$last_messages = array_reverse($query);
		return Response::json($last_messages);
	}


}
