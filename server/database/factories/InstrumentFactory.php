<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Instrument>
 */
class InstrumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'ticker' => strtoupper($this->faker->unique()->lexify('????')),
            'currency' => $this->faker->randomElement(['USD', 'EUR', 'GBP']),
            'exchange' => $this->faker->randomElement(['NYSE', 'NASDAQ', 'LSE']),
        ];
    }
}
