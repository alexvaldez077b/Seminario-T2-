<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Support\Facades\Hash;

header('Access-Control-Allow-Origin: *'); //Access-Control-Allow-Origin


Route::get('/', function () {
    //echo csrf_token();
});




Route::post('post/', function(){
  echo  json_encode(array('Post request' )) ;
} );


Route::get('attemp/{user}/{password}', 'apiLogin@login');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
