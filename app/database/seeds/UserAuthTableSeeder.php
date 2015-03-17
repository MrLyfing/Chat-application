<?php

class UserAuthTableSeeder extends Seeder {
	
	public function run()
	{
		DB::table('users_auth')->delete();
	}
}