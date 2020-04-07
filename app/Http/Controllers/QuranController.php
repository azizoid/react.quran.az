<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\QuranCollection;
use App\Quran;

class QuranController extends Controller
{
    public function index($s=1)
    {
        $data       =   ['s'=>null, 'a'=>null, 'q'=>null, 't'=>1, 'view'=>'empty'];
        $out        =   [];
        $view       =   "search";
        $trans      =   isset($_GET['t']) && is_numeric($_GET['t']) && in_array($_GET['t'], array(1,2,3)) ? $_GET['t'] : 1;
  
        $where      =   ['translator_id'=>$trans];
  
        if(is_numeric($s) && $s>0 && $s<115){
            //
            $where['soorah_id'] = $s;
            
            $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c', 'translator_id as t')
                    ->where($where)->get();

                    if($out->count() > 0){
                        $data['view'] = 'soorah';
                        $data['s']  =   $s;
                    }
        }
        $data['t'] = $trans;

        return response()->json(
            compact('out', 'data') 
         );
    }

    public function ayah($s=null, $a=null)
    {
        $data       =   ['s'=>null, 'a'=>null, 'q'=>null, 't'=>1, 'view'=>'empty'];
        $detail = [];
        $nav = [];

        $trans      =   isset($_GET['t']) && is_numeric($_GET['t']) && in_array($_GET['t'], array(1,2,3)) ? $_GET['t'] : 1;
  
        $where      =   ['translator_id'=>$trans];
  
        if(is_numeric($s) && $s>0 && $s<115){
            $data['s']  =   $s;
            $where['soorah_id'] = $s;
            
  
            if(is_numeric($a) && $a>0 && $a<287){
                $where2       = ["aya_id" => $a];
            }
            
            $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c', 'translator_id as t')
                    ->where($where)->where($where2)->get();

                    if($out->count() > 0){
                        $data['view'] = 'ayah';
                        $data['a']    = $a;

                        $id = $out->first()->id;
                        $nav['prev']  = Quran::where('id', '<', $id)->where($where)->max('aya_id');
                        $nav['next']  = Quran::where('id', '>', $id)->where($where)->min('aya_id');
                        $detail       = Quran::find($id)->detail;
                    }
        }
        $data['t'] = $trans;
  
        return response()->json(
            compact('out', 'data', 'detail', 'nav') 
         );
    }

    public function search($q=null)
    {
        $data       =   ['s'=>null, 'a'=>null, 'q'=>null, 't'=>1, 'view'=>'empty'];
        $view       =   "search";
        $trans      =   isset($_GET['t']) && is_numeric($_GET['t']) && in_array($_GET['t'], array(1,2,3)) ? $_GET['t'] : 1;
  
        $where      =   ['translator_id', $trans];
        $out        =   array();
  
        if(is_string($q) && strlen($q)>3){ 
            $query = htmlspecialchars($q);
            // $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c')
            //         ->where('content', 'like', '%'.$query.'%')
            //         ->limit(3)->get();
            $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c', 'translator_id as t')
                    ->where('translator_id', $trans)
                    ->where('content', 'like', '%'.$query.'%')
                    ->paginate(30);
                    if($out->count() >0){
                        $data['view'] = $view;
                        $data['q'] =  $query;
                    }
        }

        $data['t'] = $trans;
  
        return response()->json(
            compact('out', 'data') 
         );
    }

    public function random($limit=1, $q=null)
    {
        $data       =   ['s'=>null, 'a'=>null, 'q'=>null, 't'=>1, 'view'=>'empty'];
        $view       =   "search";
        $trans      =   isset($_GET['t']) && is_numeric($_GET['t']) && in_array($_GET['t'], array(1,2,3)) ? $_GET['t'] : 1;
        $limit      =   is_numeric($limit) && $limit==1 ? 1 : $limit;
        $query      =   $out    =   "";
  
        $data['t'] = $trans;
        if(is_string($q) && strlen($q)>3){ 
            $query  =   $data['q']  = htmlspecialchars($q);
            

            $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c', 'translator_id as t')
                ->where("content", "LIKE", "%{$query}%")
                ->where("translator_id", $data['t'])
                ->inRandomOrder()
                ->limit($limit)->get();
        }else{
            $out = Quran::select('id', 'soorah_id as s', 'aya_id as a', 'content as c', 'translator_id as t')
                ->where("translator_id", $data['t'])
                ->inRandomOrder()
                ->first();
        }
        
        if(!empty($out) && $out->count() > 0) {
            $data['view'] = "random"; 
        }else $out = "";
  
        return response()->json(
            compact('out', 'data') 
         );
    }
}
