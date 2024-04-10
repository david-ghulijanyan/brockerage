<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\BrokerageAccountResource;
use App\Models\BrokerageAccount;

class BrokerageAccountController extends Controller
{
    public function show($id)
    {
        $brokerageAccount = BrokerageAccount::findOrFail($id);
        return new BrokerageAccountResource($brokerageAccount);
    }

    public function index()
    {
        return BrokerageAccountResource::collection(BrokerageAccount::all());
    }
}
