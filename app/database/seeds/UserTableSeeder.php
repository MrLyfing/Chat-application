<?php

Class UserTableSeeder extends Seeder
{

	public function run() {
		DB::table('users')->delete();

		User::create(array(
			'username' => 'Lyfing',
			'password' => Hash::make('prout')
		));

		User::create(array(
			'username' => 'Admin',
			'password' => Hash::make('admin')
		));
	}
}