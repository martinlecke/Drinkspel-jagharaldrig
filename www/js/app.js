
let listan = new List();
let item1 = new Item('snackat skit om någon', 1);
let item2 = new Item('hoppat hopprep', 1);
let item3 = new Item('kastat sten inomhus', 1);
let item5 = new Item('haft sex utomhus', 1);
let item6= new Item('kysst en kändis', 1);
let item7 = new Item('fuskat på ett prov', 1);
let item8 = new Item('haft sex med någon i detta rummet', 1);
let item9 = new Item('använt intimtvål', 1);
let item10 = new Item('använt en falsk identitet på nätet', 1);
let item11 = new Item('gått mot röd gubbe', 1);
let item12 = new Item('svalt en insekt', 1);
let item4 = new Item('sjukanmält mig för att varit bakis', 1);

listan.list.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12);


function render() {
  $('.jagharaldrig').empty();
  $('.jagharaldrig').html('<span>Jag har aldrig</span>' + listan.list[listan.currentItem].text); 
}

function eventListeners() {

  $(document).on('click', '.jagharaldrig, .right', function() {
    listan.nextItem();
    render();
  });

  $(document).on('click', '.left', function() {
    // Prev item
    listan.prevItem();
    render();
  });

}
eventListeners();
render();