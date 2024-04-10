<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Company;

class CompaniesApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_companies_index()
    {
        Company::factory()->count(5)->create();

        $response = $this->getJson('/api/v1/companies');

        $response->assertOk()
                 ->assertJsonStructure([
                     'data' => [
                        '*' => ['id', 'name', 'ticker']
                     ]
                 ]);
    }

    public function test_show_company()
    {
        $company = Company::factory()->create();

        $response = $this->getJson("/api/v1/companies/{$company->id}");

        $response->assertOk()
                 ->assertJson([
                    'data' => [
                        'id' => $company->id,
                        'name' => $company->name,
                        'ticker' => $company->ticker,
                    ]
                 ]);
    }
}
