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

Route::group(['namespace' => 'Iview'], function () {
    Route::post('login', 'AuthController@login');
    Route::get('words/{word}/play', 'WordsController@listen');
    Route::get('sentence/play', 'WordsController@sentenceListen');

    Route::group(['middleware'=>'auth:iview'], function() {
        Route::post('logout', 'AuthController@logout');

        //category
        Route::resource('categories', 'CategoriesController');

        // words
        Route::get('words/{word}', 'WordsController@show');
        Route::get('words', 'WordsController@index');
        Route::put('words/{word}/remark', 'WordsController@remark');
        Route::post('words/{word}/{status}', 'WordsController@setStatus');

        // remark
        Route::get('notes', 'NotesController@index');
        Route::post('notes', 'NotesController@store');
        Route::put('notes/{word}', 'NotesController@update');
        Route::delete('notes/{word}', 'NotesController@destroy');
    });
});
