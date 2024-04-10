<?php

namespace Tests\Feature;

use App\Models\Instrument;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InstrumentsApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_instruments_index()
    {
        Instrument::factory()->count(5)->create();

        $response = $this->getJson('/api/v1/instruments');

        $response->assertOk()
                 ->assertJsonStructure([
                    'data' => [
                        '*' => ['id', 'name', 'ticker', 'currency', 'exchange']
                        ]
                 ]);
    }

    public function test_show_instrument()
    {
        $instrument = Instrument::factory()->create();

        $response = $this->getJson("/api/v1/instruments/{$instrument->id}");

        $response->assertOk()
                 ->assertJson([
                     'data' => [
                 'id' => $instrument->id,
                 'name' => $instrument->name,
                 'ticker' => $instrument->ticker,
                 'currency' => $instrument->currency,
                 'exchange' => $instrument->exchange,
             ]
                 ]);
    }
}
