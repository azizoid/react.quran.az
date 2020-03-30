<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Quran;

class QuranController extends Controller
{
    public function index($s=1, $a=null)
    {
        $data       =   ['s'=>null, 'a'=>null, 'q'=>null, 't'=>1, 'view'=>'empty'];
        $view       =   "search";
        $trans      =   isset($_GET['trans']) && is_numeric($_GET['trans']) && in_array($_GET['trans'], array(1,2,3)) ? $_GET['trans'] : 1;
        $random     =   isset($_GET['random']) && is_numeric($_GET['random']) && $_GET['random'] ==1 ? 1 : 0;
  
        $where      =   ['translator_id'=>$trans];
  
        if(is_numeric($s) && $s>0 && $s<115){
            //
            $data['view'] = 'soorah';
            $data['s']  =   $s;
            $where['soorah_id'] = $s;
  
            if(is_numeric($a) && $a>0 && $a<287){
                $data['view'] = 'ayah';
                $data['a']      = $a;
                $where['aya_id']= $a;
            }
            
            $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c')
                    ->where($where)->get();
        }
        $data['t'] = $trans;
  
        // if(is_string($s) && strlen($s)>3){ 
        //     $query = htmlspecialchars($s);
        //     $data['view'] = 'search';
        //     $data['q'] =  $query;
        //     $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c')
        //             ->where('content', 'like', '%'.$query.'%')
        //             ->limit(30)->inRandomOrder()->get();
        // }
  
        return response()->json(
            compact('out', 'data') 
         );
    }

    public function search($q=null)
    {
        $data       =   ['s'=>null, 'a'=>null, 'q'=>null, 't'=>1, 'view'=>'empty'];
        $view       =   "search";
        $trans      =   isset($_GET['trans']) && is_numeric($_GET['trans']) && in_array($_GET['trans'], array(1,2,3)) ? $_GET['trans'] : 1;
        $random     =   isset($_GET['random']) && is_numeric($_GET['random']) && $_GET['random'] ==1 ? 1 : 0;
  
        $where      =   ['translator_id'=>$trans];
        $out        =   array();
  
        if(is_string($q) && strlen($q)>3){ 
            $query = htmlspecialchars($q);
            $data['view'] = $view;
            $data['q'] =  $query;
            $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c')
                    ->where('content', 'like', '%'.$query.'%')
                    ->limit(30)->get();
        }
        $data['t'] = $trans;
  
        return response()->json(
            compact('out', 'data') 
         );
    }

    public function random($q=null)
    {
        $data       =   ['s'=>null, 'a'=>null, 'q'=>null, 't'=>1, 'view'=>'empty'];
        $view       =   "search";
        $trans      =   isset($_GET['trans']) && is_numeric($_GET['trans']) && in_array($_GET['trans'], array(1,2,3)) ? $_GET['trans'] : 1;
        $random     =   isset($_GET['random']) && is_numeric($_GET['random']) && $_GET['random'] ==1 ? 1 : 0;
  
        $where      =   ['translator_id'=>$trans];
  
        if(is_string($q) && strlen($q)>3){ 
            $query = htmlspecialchars($q);
            $data['view'] = 'search';
            $data['q'] =  $query;
            $out = Quran::inRandomOrder()->select('id', 'soorah_id as s', 'aya_id as a', 'content as c')
                    ->where('content', 'like', '%'.$query.'%')
                    ->first();
        }
        $data['t'] = $trans;
  
        return response()->json(
            compact('out', 'data') 
         );
    }
}
