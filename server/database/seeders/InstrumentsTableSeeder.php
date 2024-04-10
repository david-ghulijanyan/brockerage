<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InstrumentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $instruments = [
            [29, "CarGurus Inc.", "CARG", "USD", "Stock Exchange"],
            [30, "Tesla Inc.", "TSLA", "USD", "Stock Exchange"],
            [31, "Marathon Digital Holdings Inc.", "MARA", "USD", "Stock Exchange"],
            [32, "Advance Auto Parts Inc.", "AAP", "USD", "Stock Exchange"],
            [15, "NVIDIA Corporation", "NVDA", "USD", "Stock Exchange"],
            [16, "Nike Inc.", "NKE", "USD", "Stock Exchange"],
            [17, "Microsoft Corporation", "MSFT", "USD", "Stock Exchange"],
            [18, "Marathon Digital Holdings Inc.", "MARA", "USD", "Stock Exchange"],
            [19, "Alphabet Inc.", "GOOG", "USD", "Stock Exchange"],
            [20, "The Walt Disney Company", "DIS", "USD", "Stock Exchange"],
            [21, "Advanced Micro Devices Inc.", "AMD", "USD", "Stock Exchange"],
            [22, "Apple Inc.", "AAPL", "USD", "Stock Exchange"],
            [23, "AAAAAXX", "AAAAAXX", "USD", "Stock Exchange"],
            [24, "Apple Inc.", "AAPL", "USD", "Stock Exchange"],
            [26, "Amazon.com Inc.", "AMZN", "USD", "Stock Exchange"],
            [27, "AAXXXXX", "AAXXXXX", "USD", "Stock Exchange"],
            [28, "First Trust Indxx Aerospace & Defense ETF", "MISL", "USD", "Stock Exchange"],
            [35, "FutureFuel Corp.", "FF", "USD", "Stock Exchange"],
            [38, "American Airlines Group Inc.", "AAL", "USD", "Stock Exchange"],
            [40, "Hecla Mining Company", "HL", "USD", "Stock Exchange"],
            [41, "Carnival Corporation", "CCL", "USD", "Stock Exchange"],
            [44, "EMIA", "EMIA", "USD", "Stock Exchange"],
            [25, "Alphabet Inc.", "GOOG", "USD", "Stock Exchange"],
            [48, "Fate Therapeutics Inc.", "FATE", "USD", "Stock Exchange"],
            [49, "Align Technology Inc.", "ALGN", "USD", "Stock Exchange"],
            [50, "Imperial Petroleum Inc.", "IMPP", "USD", "Stock Exchange"],
            [47, "EMI C", "EMIC", "USD", "Stock Exchange"],
        ];

        foreach ($instruments as $instrument) {
            DB::table('instruments')->insert([
                'id' => $instrument[0],
                'name' => $instrument[1],
                'ticker' => $instrument[2],
                'currency' => $instrument[3],
                'exchange' => $instrument[4],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
