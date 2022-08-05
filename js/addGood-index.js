let templ = document.querySelector('#goods-template').innerHTML;
let compile = _.template(templ);
let cards = document.querySelector('.cards');

goods.forEach( function(good){
    if(compile.toString().indexOf(good.rating) >= 0){
        let compiledGood = document.createElement('div');
        compiledGood.className = 'good-wrapper';
        compiledGood.innerHTML = compile(good);
    cards.append(compiledGood);}
})