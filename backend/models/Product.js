const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({title:{type:String,required:true,trim:true},slug:{type:String,unique:true},description:String,category:{type:String,index:true},brand:String,price:{type:Number,required:true,min:0},compareAtPrice:{type:Number,min:0},images:[String],stock:{type:Number,default:0,min:0},rating:{type:Number,default:0},reviewCount:{type:Number,default:0},tags:[String],featured:{type:Boolean,default:false},active:{type:Boolean,default:true}},{timestamps:true});
module.exports=mongoose.model('Product',productSchema);
