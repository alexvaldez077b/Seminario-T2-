<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login','apiLogin@login');

Route::get('/getnews','apiLogin@getNews');
Route::get('/getmappoints','apiLogin@getmappoints');
Route::get('/test','apiLogin@test');
/*Route::middleware('auth:api')->get('/user', function (Request $request) {

    return $request->user();

});*/
