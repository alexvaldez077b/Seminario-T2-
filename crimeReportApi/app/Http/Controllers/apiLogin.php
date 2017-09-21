<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;

use Illuminate\Support\Facades\DB;
use App\News;

use DateTime;
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
        $news = DB::table('news')->limit(50)->orderBy('at','desc')->get();
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

      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
        $news = DB::table('news')->whereBetween('at', [$old->format('Y-m-d'), date('Y-m-d')])->orderBy('at','desc')->get();

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

       
         
          DB::table('news')->insert(
            [ 
              'title'       => $req->data["title"],
              'id_user'     => $req->data["user"],
              'id_crime'    => $req->data["crime"],
              'violence'    => $req->data["includeV"]?1:0,
              'lat'         => $req->data['location']["lat"],
              'lng'         => $req->data['location']["lng"],
              'at'          => $req->data["date"],
              'description' => $req->data["description"],
              'photo'       => "http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg"
            ]);

            return json_encode( array(  'access'      => true  ) );
        
            
         }
          
      
        


        
        

        

        
        
      }




    function test(){
      
      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
        
      }

    }
}
