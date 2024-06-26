<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(1)->create();

        $this->call([
            BrokerageAccountsTableSeeder::class,
            CompaniesTableSeeder::class,
            InstrumentsTableSeeder::class,
        ]);
    }
}
