<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\InstrumentController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\BrokerageAccountController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/v1/instruments', [InstrumentController::class, 'index']);
Route::get('/v1/instruments/{instrument}', [InstrumentController::class, 'show']);

Route::get('/v1/companies', [CompanyController::class, 'index']);
Route::get('/v1/companies/{company}', [CompanyController::class, 'show']);

Route::get('/v1/accounts', [BrokerageAccountController::class, 'index']);
Route::get('/v1/accounts/{account}', [BrokerageAccountController::class, 'show']);
