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

	public function store()
	{
		Message::create(array(
			'user_id' => 1 ,//Input::get('user_id')
			'text' => Input::get('text')
		));

		$response = array(
			'success' => true
		);

		return Response::json($response);
		
		//
	}


}
