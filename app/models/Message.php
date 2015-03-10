<?php

class Message extends Eloquent
{
	protected $table = 'messages'; //Will use the table messages
	protected $fillable = array('user_id', 'text', 'sender');

}