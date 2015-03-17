<?php

class MessageTableSeeder extends Seeder 
{
	public function run()
	{
		DB::table('messages')->delete();
		$lyfing_id = DB::table('users')
						->where('username', 'Lyfing')
						->pluck('id');

		$admin_id = DB::table('users')
						->where('username', 'Admin')
						->pluck('id');

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