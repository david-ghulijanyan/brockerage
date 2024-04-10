<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\BrokerageAccount;

class BrokerageAccountsApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_brokerage_accounts_index()
    {
        BrokerageAccount::factory()->count(5)->create();

        $response = $this->getJson('/api/v1/accounts');

        $response->assertOk()
                 ->assertJsonStructure([
                     'data' => [
                        '*' => ['id', 'account_number', 'balance']
                     ]
                 ]);
    }

    public function test_show_brokerage_account()
    {
        $account = BrokerageAccount::factory()->create();

        $response = $this->getJson("/api/v1/accounts/{$account->id}");

        $response->assertOk()
                 ->assertJson([
                     'data' => [
                        'id' => $account->id,
                        'account_number' => $account->account_number,
                        'balance' => $account->balance
                     ]
                 ]);
    }
}
