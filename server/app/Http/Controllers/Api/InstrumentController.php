<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\InstrumentResource;
use App\Models\Instrument;

class InstrumentController extends Controller
{
    public function show($id)
    {
        $instrument = Instrument::findOrFail($id);
        return new InstrumentResource($instrument);
    }

    public function index()
    {
        return InstrumentResource::collection(Instrument::all());
    }
}
