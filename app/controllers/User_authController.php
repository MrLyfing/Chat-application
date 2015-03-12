<?php

class User_authController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$query = DB::table('users_auth')
					->select('users.id', 'users.username')
					->join('users', 'users.id', '=', 'users_auth.user_id')
					->get();

		return Response::json($query);
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($id)
	{
		User_auth::create(array(
			'user_id' => $id
			));
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		DB::table('users_auth')
		->where('users_auth.user_id', '=', $id)
		->delete();
	}
}
