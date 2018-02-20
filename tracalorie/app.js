
//item ctrl
const ItemCtrl = (function(id, name, calories){
       this.id = id;
       this.name = name;
       this.calories = calories;
  //create a state data
  const data = {
    items:[
      {id:0, name:'Stake Meal',calories:900},
      {id:1, name:'Pizza Meal',calories:600},
      {id:2, name:'Eggs Meal',calories:300} 
    ],
    currentItem:null,
    calories:0
  }
  //Public Methods
  return {
    getItems: function (){
      return data.items
    },
    // logData:function (){
    //   return data;
    // }
  }
})();
//ui ctrl
const UICtrl = (function(){
  const UISelectors = {
    itemList:'#item-list'
  }
  //public methods
  return{
    populateItemList: function(items) {
      let html = '';
      items.forEach(function(item){
       html += `
       <li class="collection-item" id="item-${item.id}">
       <strong>${item.name}: </strong> <em>${item.calories}</em>
       <a href="#" class="secondary-content">
         <i class="edit-item fa fa-pencil"></i>
       </a>
     </li>
       `
    });
    document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }
  })();

//app contrl
const App = (function(ItemCtrl, UICtrl){
  return {
    init: function(){
      const items = ItemCtrl.getItems();
      //populate item list
      UICtrl.populateItemList(items);
    }
  }
})(ItemCtrl, UICtrl);

App.init();