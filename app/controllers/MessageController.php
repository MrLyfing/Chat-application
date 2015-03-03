<?php

class MessageController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Message::get());
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */

	public function create()
	{
		Message::create(array(
			'author' => Input::get('author'),
			'user_id' => 1//Input::get('user_id')
		));

		$response = array(
			'success' => true
		);

		return Response::json($response);
		
		//
	}


}
