module.exports = function (req,res) {
    var p = {a:1}
    res.render('index.pug',p);
}