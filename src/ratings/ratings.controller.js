const path = require("path");
const ratings = require(path.resolve("src/data/ratings-data"));

function idChecker(req,res,next){
  // const noteId=req.params.noteId
  // const filterCheck =noteId?(rating)=>rating.noteId===Number(noteId):()=>true;
  // res.locals.ratings=ratings.filter(filterCheck)
  // next()
  const { noteId } = req.params;
  const byNodeId = noteId
    ? (rating) => rating.noteId === Number(noteId)
    : () => true;
  res.locals.ratings = ratings.filter(byNodeId);
  next();
  
}

function ratingIdCheck(req,res,next){
  // res.locals.ratings=
  const {ratingId}=req.params
  const foundRating = res.locals.ratings.find((rating)=>rating.id===Number(ratingId))
  console.log(foundRating)
  if(foundRating){
    res.locals.rating=foundRating
    return next()
  }next({status:404,message:ratingId})

}

function allRatings(req,res){
    // res.locals.ratings=ratings
    console.log(res.locals.ratings)
    res.json({data:res.locals.ratings})
    // .status(200)

}

function specId(req,res){
    // const specId = Number(req.params.ratingId);
    // const foundRating = res.locals.rating.find((rating) => rating.id === specId);
  
    // foundRating.ratings = ratings;
  
    res.json({ data: res.locals.rating })
  }

module.exports = {
  allRatings:[idChecker,allRatings],
  specId:[idChecker,ratingIdCheck,specId]
};
