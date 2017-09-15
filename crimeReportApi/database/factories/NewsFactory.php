<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\News::class, function (Faker $faker) {
    static $password;

    return [

        'id_user' => 1,
        'title' => $faker->text($maxNbChars = 50),
        'description' => $faker->realText($maxNbChars = 200, $indexSize = 2),
        'lat' => $faker->latitude($min = 31.606609719226917, $max = 31.753860822284455),
        'lng' => $faker->longitude($min = -106.34113311767578, $max = -106.5340805053711), 
        'at' => $faker->dateTimeBetween($startDate = '-5 days', $endDate = 'now' ),
        'photo' => $faker->imageUrl($width = 640, $height = 480),

    ];
});
