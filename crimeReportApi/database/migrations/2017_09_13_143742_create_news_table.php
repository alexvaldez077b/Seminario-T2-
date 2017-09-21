<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            //Index table
            $table->increments('id');
            $table->integer('id_user');

            $table->integer('id_crime');
            

            //table fields
            $table->string('title');          //titulo
            $table->string('description');    //descripcion
            $table->boolean('violence');
            $table->decimal('lat', 18, 15);   //latitud longitud
            $table->decimal('lng', 18, 15);
            $table->dateTime('at');
            $table->string('photo')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}
