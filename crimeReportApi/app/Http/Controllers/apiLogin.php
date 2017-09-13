<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;

use Illuminate\Support\Facades\DB;
use App\News;
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
                                            'username' => $user->name,
                                            'email'   => $user->email)) ;

                    //return redirect()->intended('dashboard');
            }else{
              echo json_encode(array('access' => false ));
            }

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

    function getmappoints(Request $req){
      if($req->_token!="2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI="){
        return json_encode(array('error' => "InvalidArgumentException token" ));
      }else {
        $news = DB::table('news')->limit(50)->orderBy('at','desc')->get();
        $points = array();
        foreach ($news as $row) {
          array_push($points,  array('lat' => $row->lat , 'lng' => $row->lng ) );
        }

        echo json_encode($points);
      }

    }

    function test(){
      $user = User::where('email', 'alexvaldez077b@gmail.com')->get();
      foreach ($user as $row) {
        print_r($row);
      }

    }
}