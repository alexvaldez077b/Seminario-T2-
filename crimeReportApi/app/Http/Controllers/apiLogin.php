<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\News;

use DateTime;
use Image;

class apiLogin extends Controller
{
    public function login(Request $req){
        if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
          return json_encode(array('error' => "InvalidArgumentException token" ));
        }else {

          if ($user = Auth::attempt(['email' => $req->username, 'password' => $req->password])) {
                    // Authentication passed...
                    $user = User::where('email', $req->username)->first();

                    echo json_encode(array('access' => true,
                                            'id' => $user->id,
                                            'username' => $user->name,
                                            'email'   => $user->email)) ;

                    //return redirect()->intended('dashboard');
            }else{
              echo json_encode(array('access' => false ));
            }

          }
    }

    public function register(Request $req){
      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {

        $user = User::create(['name' => $req->username, 'email' => $req->email, 'password' => Hash::make($req->password) ]);
        
        if($user->id){

          echo json_encode(array('access' => true,
          'id' => $user->id,
          'username' => $user->name,
          'email'   => $user->email)) ;

        }else{
          echo json_encode(array('access' => false, 'msg' => "Error al crear usuario, intentelo mas tarde" ));
        }
        /*if ($user = Auth::attempt(['email' => $req->username, 'password' => $req->password])) {
                  // Authentication passed...
                  $user = User::where('email', $req->username)->first();

                  echo json_encode(array('access' => true,
                                          'id' => $user->id,
                                          'username' => $user->name,
                                          'email'   => $user->email)) ;

                  //return redirect()->intended('dashboard');
          }else{
            echo json_encode(array('access' => false ));
          }
        */
        }
  }

    function geteventTypes(Request $req){
      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){

        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {

        $news = DB::table('crimenes')->get();
        echo json_encode($news);

      }

    }

    function getNews(Request $req){
      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
        $news = DB::table('news') ->limit(50)->orderBy('at','desc')->get();
        echo json_encode($news);
      }

    }

    function getmappointsToday(Request $req){

      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
        $news = DB::table('news')->where('at','like',date('Y-m-d')."%")->orderBy('at','desc')->get();
        $points = array();
        foreach ($news as $row) {
          array_push($points,  array('lat' => $row->lat , 'lng' => $row->lng ) );
        }

        echo json_encode($points);
      }


    }

    function getmappointsWeek(Request $req){
      $old = new DateTime();
      $old->modify('-6 day');

      //echo $old->format('Y-m-d'), date('Y-m-d');

      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
        $news = DB::table('news')->whereBetween('at', [$old->format('Y-m-d 00:00:00'), date('Y-m-d 23:59:59')])->orderBy('at','desc')->get();

        $points = array();
        foreach ($news as $row) {
          array_push($points,  array('lat' => $row->lat , 'lng' => $row->lng ) );
        }

        echo json_encode($points);
      }

    }

    function getmappointsMonth(Request $req){

      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
        $news = DB::table('news')->where('at','like',date('Y-m')."%")->orderBy('at','desc')->get();
        $points = array();
        foreach ($news as $row) {
          array_push($points,  array('lat' => $row->lat , 'lng' => $row->lng ) );
        }

        echo json_encode($points);
      }

    }

    function sendnew(Request $req){

      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {

        //modify database to crated_at set current_timestamp
        $id = DB::table('news')->insertGetId(
          [ 
            'title'       => $req->data["title"],
            'id_user'     => $req->data["user"],
            'id_crime'    => $req->data["crime"],
            'violence'    => $req->data["includeV"]?1:0,
            'lat'         => $req->data['location']["lat"],
            'lng'         => $req->data['location']["lng"],
            'at'          => $req->data["date"],
            'description' => $req->data["description"]
          ]);

        if($req->data['image'] != ""){

          $png_url = "event-".time().".png";
          $path = public_path().'\\img\\' . $png_url;
          Image::make(file_get_contents($req->data['image']))->save($path);     
          BD::table('media')->insert([ 'id_event' => $id, 'path'    => $png_url ]);

        }

        //Send pushi <notification class="">
        


            return json_encode( array(  'access'      => true  ) );
        
            
         }
        
      }

     function detailnew(Request $req){

      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      
      }else {
       
      $post = DB::table('news')->join('crimenes', 'crimenes.id', '=', 'news.id_crime') ->where('news.id','=',$req->id) ->get();

      return json_encode($post);

        
      }


     }

     function getmedia(Request $req){

      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
       
        $media =  DB::table('media')->where('id_event','=',$req->id )->get();
        
        return json_encode($media);

      }

     }




    function test(){
      
      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
        
      }

    }
}
