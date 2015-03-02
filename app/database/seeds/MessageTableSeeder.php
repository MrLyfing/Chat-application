<?php

use Illuminate\Database\Seeder;

class MessageTableSeeder extends Seeder 
{
	public function run()
	{
		DB::table('messages')->delete();
		$lyfing_id = DB::table('users')
						->select('id')
						->where('username', 'Lyfing')
						->first() //first() is used for getting the table row
						->id;

		$admin_id = DB::table('users')
						->select('id')
						->where('username', 'Admin')
						->first()
						->id;

		$this->command->info($lyfing_id); //display info on the console when db:seed
		$this->command->info($admin_id);

		Message::create(array(
			'user_id' => $lyfing_id,
			'text' => 'Hey how are you ?'
		));

		Message::create(array(
			'user_id' => $admin_id,
			'text' => 'Find and you ? :)'
		));
	}

}