<?php

class User_auth extends Eloquent
{
	protected $table = 'users_auth'; //Will use the table messages
	protected $fillable = array('user_id');
}
