<?php

class MessageController extends \BaseController {

	public function index()
	{
		return Response::json($all);
	}

	public function store()
	{
		Message::create(array(
			'user_id' =>  Auth::id(),
			'text' => Input::get('text'),
		));

		$response = array(
			'success' => true
		);
		return Response::json($response);
	}

	public function getLastMessages() //return the last messages
	{
		$query = DB::table('messages')
				->select('users.id', 'users.username', 'messages.text')
				->join('users', 'users.id', '=', 'messages.user_id')
				->orderBy('messages.created_at', 'DESC')
				->take(12)
				->get();

		$last_messages = array_reverse($query);
		return Response::json($last_messages);
	}
}
